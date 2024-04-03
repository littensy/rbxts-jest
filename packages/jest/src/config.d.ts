import { PrettyFormatOptions } from "@rbxts/pretty-format";

export type Path = string;

export type Glob = string;

type Timers = "real" | "fake" | "modern" | "legacy";

export type FakeableAPI =
	| "Date"
	| "hrtime"
	| "nextTick"
	| "performance"
	| "queueMicrotask"
	| "requestAnimationFrame"
	| "cancelAnimationFrame"
	| "requestIdleCallback"
	| "cancelIdleCallback"
	| "setImmediate"
	| "clearImmediate"
	| "setInterval"
	| "clearInterval"
	| "setTimeout"
	| "clearTimeout";

export type GlobalFakeTimersConfig = {
	/**
	 * Whether fake timers should be enabled globally for all test files.
	 *
	 * @defaultValue
	 * The default is `false`.
	 */
	enableGlobally?: boolean;
};

export type FakeTimersConfig = {
	/**
	 * If set to `true` all timers will be advanced automatically
	 * by 20 milliseconds every 20 milliseconds. A custom time delta
	 * may be provided by passing a number.
	 *
	 * @defaultValue
	 * The default is `false`.
	 */
	advanceTimers?: boolean | number;
	/**
	 * List of names of APIs (e.g. `Date`, `nextTick()`, `setImmediate()`,
	 * `setTimeout()`) that should not be faked.
	 *
	 * @defaultValue
	 * The default is `[]`, meaning all APIs are faked.
	 */
	doNotFake?: Array<FakeableAPI>;
	/**
	 * Sets current system time to be used by fake timers, in milliseconds.
	 *
	 * @defaultValue
	 * The default is `Date.now()`.
	 */
	now?: number | DateTime;
	/**
	 * The maximum number of recursive timers that will be run when calling
	 * `jest.runAllTimers()`.
	 *
	 * @defaultValue
	 * The default is `100_000` timers.
	 */
	timerLimit?: number;
	/**
	 * Use the old fake timers implementation instead of one backed by
	 * [`@sinonjs/fake-timers`](https://github.com/sinonjs/fake-timers).
	 *
	 * @defaultValue
	 * The default is `false`.
	 */
	legacyFakeTimers?: false;
};

export type LegacyFakeTimersConfig = {
	/**
	 * Use the old fake timers implementation instead of one backed by
	 * [`@sinonjs/fake-timers`](https://github.com/sinonjs/fake-timers).
	 *
	 * @defaultValue
	 * The default is `false`.
	 */
	legacyFakeTimers?: true;
};

type FakeTimers = GlobalFakeTimersConfig &
	(
		| (FakeTimersConfig & {
				now?: Exclude<FakeTimersConfig["now"], DateTime>;
		  })
		| LegacyFakeTimersConfig
	);

export type ConfigGlobals = {
	[key: string]: any;
};

export type DisplayName = {
	name: string;
	color: string;
};

export type InitialProjectOptions = Pick<InitialOptions, Exclude<keyof ProjectConfig, "fakeTimers">>;

export type InitialOptions = Partial<{
	automock: boolean;
	bail: boolean | number;
	ci: boolean;
	clearMocks: boolean;
	changedSince: string;
	displayName: string | DisplayName;
	expand: boolean;
	filter: Path;
	findRelatedTests: boolean;
	json: boolean;
	globals: ConfigGlobals;
	injectGlobals: boolean;
	listTests: boolean;
	maxConcurrency: number;
	maxWorkers: number | string;
	moduleLoader: Path;
	id: string;
	noStackTrace: boolean;
	outputFile: Path;
	passWithNoTests: boolean;
	/**
	 * @deprecated Use `transformIgnorePatterns` options instead.
	 */
	preprocessorIgnorePatterns: Array<Glob>;
	preset: string | undefined;
	projects: Array<Glob | InitialProjectOptions>;
	resetMocks: boolean;
	resetModules: boolean;
	restoreMocks: boolean;
	rootDir: Instance;
	roots: Array<Path>;
	runner: string;
	runTestsByPath: boolean;
	runtime: string;
	sandboxInjectedGlobals: Array<string>;
	/**
	 * @deprecated Use `transform` options instead.
	 */
	scriptPreprocessor: string;
	setupFiles: Array<ModuleScript>;
	setupFilesAfterEnv: Array<ModuleScript>;
	silent: boolean;
	skipFilter: boolean;
	skipNodeResolution: boolean;
	slowTestThreshold: number;
	snapshotSerializers: Array<Path>;
	snapshotFormat: PrettyFormatOptions;
	testEnvironment: string;
	testEnvironmentOptions: Record<string, any>;
	testFailureExitCode: string | number;
	testLocationInResults: boolean;
	testMatch: Array<Glob>;
	testNamePattern: string;
	/**
	 * @deprecated Use `roots` options instead.
	 */
	testPathDirs: Array<Path>;
	testPathIgnorePatterns: Array<string>;
	testRegex: string | Array<string>;
	testTimeout: number;
	timers: Timers;
	updateSnapshot: boolean;
	verbose: boolean;
}>;

export type SnapshotUpdateState = "all" | "new" | "none";

export type GlobalConfig = {
	bail: number;
	changedSince?: string;
	expand: boolean;
	filter?: Path;
	json: boolean;
	listTests: boolean;
	maxConcurrency: number;
	maxWorkers: number;
	noStackTrace: boolean;
	nonFlagArgs: Array<string>;
	outputFile?: Path;
	passWithNoTests: boolean;
	projects: Array<Instance>;
	runTestsByPath: boolean;
	rootDir: Instance;
	silent?: boolean;
	skipFilter: boolean;
	snapshotFormat: PrettyFormatOptions;
	testFailureExitCode: number;
	testNamePattern?: string;
	testPathPattern: string;
	testTimeout?: number;
	updateSnapshot: SnapshotUpdateState;
	verbose?: boolean;
};

export type ProjectConfig = {
	automock: boolean;
	clearMocks: boolean;
	displayName?: DisplayName;
	fakeTimers: FakeTimers;
	filter?: Path;
	id: string;
	injectGlobals: boolean;
	resetMocks: boolean;
	resetModules: boolean;
	restoreMocks: boolean;
	rootDir: Instance;
	roots: Array<Path>;
	runner: string;
	runtime?: string;
	sandboxInjectedGlobals: Array<ProjectConfig>;
	setupFiles: Array<ModuleScript>;
	setupFilesAfterEnv: Array<ModuleScript>;
	skipFilter: boolean;
	slowTestThreshold: number;
	snapshotSerializers: Array<Path>;
	snapshotFormat: PrettyFormatOptions;
	testEnvironment: string;
	testEnvironmentOptions: Record<string, any>;
	testMatch: Array<Glob>;
	testLocationInResults: boolean;
	testPathIgnorePatterns: Array<string>;
	testRegex: Array<string>;
	timers: Timers;
};

export type Argv = Partial<{
	all: boolean;
	automock: boolean;
	bail: boolean | number;
	changedSince: string;
	ci: boolean;
	clearCache: boolean;
	clearMocks: boolean;
	color: boolean;
	colors: boolean;
	config: string;
	coverage: boolean;
	debug: boolean;
	env: string;
	expand: boolean;
	globals: string;
	init: boolean;
	injectGlobals: boolean;
	json: boolean;
	maxWorkers: number | string;
	noStackTrace: boolean;
	outputFile: string;
	preset: string | undefined;
	projects: Array<string>;
	resetMocks: boolean;
	resetModules: boolean;
	restoreMocks: boolean;
	rootDir: Instance;
	roots: Array<string>;
	runInBand: boolean;
	selectProjects: Array<string>;
	setupFiles: Array<ModuleScript>;
	setupFilesAfterEnv: Array<ModuleScript>;
	showConfig: boolean;
	silent: boolean;
	snapshotSerializers: Array<string>;
	testEnvironment: string;
	testEnvironmentOptions: string;
	testFailureExitCode: string | undefined;
	testMatch: Array<string>;
	testNamePattern: string;
	testPathIgnorePatterns: Array<string>;
	testPathPattern: Array<string>;
	testRegex: string | Array<string>;
	testTimeout: number | undefined;
	timers: string;
	updateSnapshot: boolean;
	verbose: boolean;
	version: boolean;
}>;
