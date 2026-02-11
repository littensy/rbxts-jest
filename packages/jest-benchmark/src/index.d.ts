// Type Aliases

/**
 * The function passed to {@link benchmark}, given a {@link Profiler} and
 * {@link Reporter} map.
 */
export type BenchFn = (profiler: Profiler, reporters: ReporterMap) => void;

/**
 * Takes a list of values and returns a single result.
 *
 * @template T - The type of values being collected.
 */
export type CollectorFn<T> = (values: ReadonlyArray<T>) => T;

/** Called with a metric name and its value when results are output. */
export type MetricLoggerFn = (metricName: string, value: unknown) => void;

/**
 * Runs a set of {@link Reporter | Reporters} together over profiling sections.
 *
 * Call {@link Profiler.start} and {@link Profiler.stop} to define sections.
 * Sections can nest or run back-to-back. Call {@link Profiler.finish} to output
 * results.
 */
export interface Profiler {
	/** Finishes all reporters and outputs their results via the output function. */
	finish(this: void): void;
	/**
	 * Starts a new section. Calls `start` on every reporter. Must be paired
	 * with {@link Profiler.stop}.
	 *
	 * @param profileSectionName - Label for the section.
	 */
	start(this: void, profileSectionName: string): void;
	/**
	 * Ends the current section. Calls `stop` on every reporter. Errors if no
	 * section is open.
	 */
	stop(this: void): void;
}

/** A key-value map of {@link Reporter} instances by name. */
export type ReporterMap = Record<string, Reporter>;

export namespace Profiler {
	/**
	 * Creates a {@link Profiler} that wraps the given reporters.
	 *
	 * @param reporters - Reporters to run on each section.
	 * @param outputFunc - Called with each metric name and value on
	 *   {@link Profiler.finish}.
	 * @param prefix - Prepended to all section names.
	 * @returns A new {@link Profiler} instance.
	 */
	function initializeProfiler(
		reporters: ReadonlyArray<Reporter>,
		outputFunc: MetricLoggerFn,
		prefix?: string,
	): Profiler;
}

/**
 * Collects values during a benchmark and reduces them per section.
 *
 * Use {@link Reporter.start}/{@link Reporter.stop} to define sections, then
 * {@link Reporter.report} to record values. Call {@link Reporter.finish} to run
 * the collector function on each section and get the results.
 *
 * @example
 *
 * ```ts
 * const avg = Reporter.initializeReporter<number>("average", (values) => {
 * 	return values.reduce((a, b) => a + b, 0) / values.size();
 * });
 *
 * avg.start("section1");
 * avg.report(1);
 * avg.report(3);
 * avg.stop();
 *
 * const [names, values] = avg.finish();
 * // names: ["section1"], values: [2]
 * ```
 *
 * @template T - The type of values being collected and aggregated.
 */
export interface Reporter<T = unknown> {
	/**
	 * Runs the collector function on each section's values and returns the
	 * results.
	 *
	 * @returns Section names and their reduced values, in completion order.
	 */
	finish(this: void): LuaTuple<[Array<string>, Array<T>]>;
	/**
	 * Records a value in the current section. Can also take a function that
	 * receives the previous value and time delta.
	 *
	 * @param value - The value to record, or a function to compute it.
	 */
	report(
		this: void,
		value: ((previousValue: T | undefined, timeDelta: number | undefined) => T) | T,
	): void;
	/**
	 * Opens a new section. Values reported inside are grouped together and
	 * reduced on {@link Reporter.finish}. Sections can nest. Must be closed with
	 * {@link Reporter.stop}.
	 *
	 * @param sectionName - Label for the section.
	 */
	start(this: void, sectionName: string): void;
	/**
	 * Closes the current section. Values are not reduced yet — that happens in
	 * {@link Reporter.finish} to avoid affecting benchmark performance.
	 */
	stop(this: void): void;
}

export namespace Reporter {
	/**
	 * Creates a {@link Reporter} with the given metric name and collector.
	 *
	 * @template T - The type of values being collected.
	 * @param metricName - Label for the metric.
	 * @param collectorFunc - Reduces a section's values to a single result.
	 * @returns A new {@link Reporter} instance.
	 */
	function initializeReporter<T>(metricName: string, collectorFunc: CollectorFn<T>): Reporter<T>;
}

// HeartbeatReporter

export namespace HeartbeatReporter {
	/**
	 * Creates a {@link Reporter} that records `RunService.Heartbeat` delta times
	 * while a section is open.
	 *
	 * @param metricName - Label for the metric.
	 * @param collectorFunc - Reduces the collected delta times to one value.
	 * @returns A new {@link Reporter} instance.
	 */
	function initializeHeartbeatReporter(
		metricName: string,
		collectorFunc: CollectorFn<number>,
	): Reporter<number>;
}

/**
 * Benchmark output goes to stdout by default. Override with
 * {@link MetricLogger.useCustomMetricLogger} to write somewhere else (a file, a
 * BindableEvent, etc.), and {@link MetricLogger.useDefaultMetricLogger} to
 * switch back.
 */
export namespace MetricLogger {
	/** The active output function. */
	const log: MetricLoggerFn;
	/**
	 * Replaces the output function.
	 *
	 * @param customMetricLogger - Called with metric name and value.
	 */
	function useCustomMetricLogger(customMetricLogger: MetricLoggerFn): void;
	/** Resets the output function to the default (stdout). */
	function useDefaultMetricLogger(): void;
}

/**
 * By default, {@link benchmark} includes FPS and SectionTime reporters. Use
 * {@link CustomReporters.useCustomReporters} to add more, and
 * {@link CustomReporters.useDefaultReporters} to clear them.
 */
export namespace CustomReporters {
	/** The currently registered custom reporters. */
	const customReporters: ReporterMap;
	/**
	 * Registers additional reporters. They are passed as the second argument to
	 * the benchmark callback.
	 *
	 * @param reporters - Key-value map of reporters to add.
	 */
	function useCustomReporters(reporters: ReporterMap): void;
	/**
	 * Removes all custom reporters, keeping only the FPS and SectionTime
	 * defaults.
	 */
	function useDefaultReporters(): void;
}

/**
 * Like `test`, but automatically profiles FPS and run time. Use
 * `benchmark.only` and `benchmark.skip` to focus or skip.
 *
 * @example
 *
 * ```ts
 * benchmark("First Render Performance", (Profiler, reporters) => {
 * 	render(React.createElement(HomePage));
 * 	const carousel = screen.getByText("Continue").expect();
 * 	expect(carousel).toBeDefined();
 * });
 * ```
 */
interface BenchmarkFunction {
	(this: void, testName: string, benchFunc: BenchFn, timeout?: number): void;
	/** Run only this benchmark, skip everything else. */
	only(this: void, testName: string, benchFunc: BenchFn, timeout?: number): void;
	/** Skip this benchmark. */
	skip(this: void, testName: string, benchFunc: BenchFn, timeout?: number): void;
}

export const benchmark: BenchmarkFunction;
