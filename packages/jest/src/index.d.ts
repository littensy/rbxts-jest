import { PrettyFormatOptions } from "@rbxts/pretty-format";

declare namespace ConfigTypes {
	export type DisplayName = {
		name: string;
		color: string;
	};

	export type InitialProjectOptions = Pick<InitialOptions & { cwd?: string }, keyof ProjectConfig>;

	export type InitialOptions = Partial<{
		automock: boolean;
		bail: boolean | number;
		ci: boolean;
		clearMocks: boolean;
		changedSince: string;
		dependencyExtractor: string;
		displayName: string | DisplayName;
		expand: boolean;
		extensionsToTreatAsEsm: Array<string>;
		fakeTimers: any;
		filter: string;
		forceCoverageMatch: Array<string>;
		json: boolean;
		globals: string;
		id: string;
		injectGlobals: boolean;
		listTests: boolean;
		maxConcurrency: number;
		maxWorkers: number | string;
		noStackTrace: boolean;
		openHandlesTimeout: number;
		outputFile: string;
		passWithNoTests: boolean;
		preset: string | undefined;
		projects: Array<string | InitialProjectOptions>;
		randomize: boolean;
		replname: string | undefined;
		resetMocks: boolean;
		resetModules: boolean;
		restoreMocks: boolean;
		rootDir: string;
		roots: Array<string>;
		runner: string;
		runTestsByPath: boolean;
		runtime: string;
		sandboxInjectedGlobals: Array<string>;
		setupFiles: Array<ModuleScript>;
		setupFilesAfterEnv: Array<ModuleScript>;
		showSeed: boolean;
		silent: boolean;
		skipFilter: boolean;
		skipNodeResolution: boolean;
		slowTestThreshold: number;
		snapshotResolver: string;
		snapshotSerializers: Array<string>;
		snapshotFormat: PrettyFormatOptions;
		testEnvironment: string;
		testEnvironmentOptions: Record<string, unknown>;
		testFailureExitCode: string | number;
		testLocationInResults: boolean;
		testMatch: Array<string>;
		testNamePattern: string;
		testPathIgnorePatterns: Array<string>;
		testRegex: string | Array<string>;
		testTimeout: number;
		updateSnapshot: boolean;
		verbose?: boolean;
		workerIdleMemoryLimit: number | string;
		workerThreads: boolean;
	}>;

	export type SnapshotUpdateState = "all" | "new" | "none";

	export type GlobalConfig = {
		bail: number;
		changedSince?: string;
		ci: boolean;
		expand: boolean;
		filter?: string;
		json: boolean;
		listTests: boolean;
		maxConcurrency: number;
		maxWorkers: number;
		noStackTrace: boolean;
		nonFlagArgs: Array<string>;
		noSCM?: boolean;
		outputFile?: string;
		openHandlesTimeout: number;
		passWithNoTests: boolean;
		projects: Array<string>;
		randomize?: boolean;
		replname?: string;
		runInBand: boolean;
		runTestsByPath: boolean;
		rootDir: Instance;
		seed: number;
		showSeed?: boolean;
		silent?: boolean;
		skipFilter: boolean;
		snapshotFormat: PrettyFormatOptions;
		testFailureExitCode: number;
		testNamePattern?: string;
		testPathPatterns: Array<string>;
		testTimeout?: number;
		updateSnapshot: SnapshotUpdateState;
		verbose?: boolean;
		workerIdleMemoryLimit?: number;
		// TODO: make non-optional in Jest 30
		workerThreads?: boolean;
	};

	export type ProjectConfig = {
		automock: boolean;
		clearMocks: boolean;
		cwd: string;
		dependencyExtractor?: string;
		displayName?: DisplayName;
		extensionsToTreatAsEsm: Array<string>;
		fakeTimers: any;
		filter?: string;
		forceCoverageMatch: Array<string>;
		globals: string;
		id: string;
		injectGlobals: boolean;
		openHandlesTimeout: number;
		preset?: string;
		resetMocks: boolean;
		resetModules: boolean;
		restoreMocks: boolean;
		rootDir: Instance;
		roots: Array<string>;
		runner: string;
		runtime?: string;
		sandboxInjectedGlobals: Array<unknown>;
		setupFiles: Array<ModuleScript>;
		setupFilesAfterEnv: Array<ModuleScript>;
		skipFilter: boolean;
		skipNodeResolution?: boolean;
		slowTestThreshold: number;
		snapshotResolver?: string;
		snapshotSerializers: Array<string>;
		snapshotFormat: PrettyFormatOptions;
		testEnvironment: string;
		testEnvironmentOptions: Record<string, unknown>;
		testMatch: Array<string>;
		testLocationInResults: boolean;
		testPathIgnorePatterns: Array<string>;
		testRegex: Array<string>;
		testTimeout: number;
		workerIdleMemoryLimit?: number;
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
		preset: string;
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
		testFailureExitCode: string;
		testMatch: Array<string>;
		testNamePattern: string;
		testPathIgnorePatterns: Array<string>;
		testPathPattern: Array<string>;
		testRegex: string | Array<string>;
		testTimeout: number;
		timers: string;
		updateSnapshot: boolean;
		verbose: boolean;
		version: boolean;
	}>;
}

// SearchSource

interface Path {
	initialize: (this: Path, root: string, sep: string) => void;
	getRoot: (this: Path, filePath?: string) => string;
	getSep: (this: Path) => string;
	pathsEqual: (this: Path, a: string, b: string) => boolean;
	normalize: (this: Path, filepath: string) => string;
	join: (this: Path, ...args: string[]) => string;
	resolve: (this: Path, ...args: string[]) => string | undefined;
	relative: (this: Path, from: string, to: string) => string;
	dirname: (this: Path, filepath: string) => string;
	basename: (this: Path, filepath: string, expected_ext?: string) => string;
	extname: (this: Path, filepath: string) => string | undefined;
	isDriveRelative: (this: Path, filePath?: string) => boolean;
	isAbsolute: (this: Path, filepath: string) => boolean;
	normalizeSeparators: (this: Path, filepath: string) => string;
	sep: string;
	root: string;
}

interface Test {
	context: Context;
	duration?: number;
	path: Path;
	script: ModuleScript;
}

interface Context {
	config: ConfigTypes.ProjectConfig;
}

interface SearchResult {
	tests: Array<Test>;
	total?: number;
}

type FilterResult = { test: string; message: string };

type Filter = (testPaths: Array<string>) => Promise<{ filtered: Array<FilterResult> }>;

export class SearchSource {
	constructor(context: Record<string, any>);
	isTestFilePath: (this: SearchSource, path: Path) => boolean;
	findMatchingTests: (this: SearchSource, testPathPattern?: string) => SearchResult;
	getTestPaths: (
		this: SearchSource,
		globalConfig: ConfigTypes.GlobalConfig,
		changedFiles?: undefined,
		filter?: Filter,
	) => Promise<SearchResult>;
}

// createTestScheduler

interface ReporterContext {
	firstRun: boolean;
	previousSuccess: boolean;
	changedFiles?: Set<Path>;
	sourcesRelatedToTestsInChangedFiles?: Set<Path>;
	startRun?: (globalConfig: ConfigTypes.GlobalConfig) => unknown;
}

interface TestRunnerContext {
	changedFiles?: Set<Path>;
	sourcesRelatedToTestsInChangedFiles?: Set<Path>;
}

type TestSchedulerContext = ReporterContext | TestRunnerContext;

interface BaseReporter {
	log: (this: BaseReporter, message: string) => void;
	onRunStart: (this: BaseReporter) => void;
	onTestCaseResult: (this: BaseReporter) => void;
	onTestResult: (this: BaseReporter) => void;
	onTestStart: (this: BaseReporter) => void;
	onRunComplete: (this: BaseReporter) => void;
	getLastError: (this: BaseReporter) => unknown;
}

type ReporterConstructor = new (
	globalConfig: ConfigTypes.GlobalConfig,
	reporterConfig: Record<string, unknown>,
	reporterContext: ReporterContext,
) => BaseReporter;

interface MatcherResults {
	actual: any;
	expected: any;
	name: string;
	pass: boolean;
}

type TestStatus = "skip" | "done" | "todo";

interface TestResult {
	duration?: number;
	errors: Array<string>;
	errorsDetailed: Array<MatcherResults | any>;
	invocations: number;
	status: TestStatus;
	location?: { column: number; line: number };
	retryReasons: Array<string>;
	testPath: Array<string>;
}

interface SnapshotSummary {
	added: number;
	didUpdate: boolean;
	failure: boolean;
	filesAdded: number;
	filesRemoved: number;
	filesRemovedList: Array<string>;
	filesUnmatched: number;
	filesUpdated: number;
	matched: number;
	total: number;
	unchecked: number;
	uncheckedKeysByFile: Array<object>;
	unmatched: number;
	updated: number;
}

interface AggregatedResult {
	numFailedTests: number;
	numFailedTestSuites: number;
	numPassedTests: number;
	numPassedTestSuites: number;
	numPendingTests: number;
	numTodoTests: number;
	numPendingTestSuites: number;
	numRuntimeErrorTestSuites: number;
	numTotalTests: number;
	numTotalTestSuites: number;
	openHandles: Array<unknown>;
	snapshot: SnapshotSummary;
	startTime: number;
	success: boolean;
	testResults: Array<TestResult>;
	wasInterrupted: boolean;
	coverageMap?: any;
}

interface TestCaseResult {
	ancestorTitles: Array<string>;
	duration?: number;
	failureDetails: Array<any>;
	failureMessages: Array<string>;
	fullName: string;
	invocations?: number;
	location?: { column: number; line: number };
	numPassingAsserts: number;
	retryReasons?: Array<string>;
	status: "passed" | "failed" | "skipped" | "pending" | "todo" | "disabled";
	title: string;
}

interface Reporter {
	onTestResult?: (
		this: Reporter,
		test: Test,
		testResult: TestResult,
		aggregatedResult: AggregatedResult,
	) => Promise<void> | void;
	onTestFileResult?: (
		this: Reporter,
		test: Test,
		testResult: TestResult,
		aggregatedResult: AggregatedResult,
	) => Promise<void> | void;
	onTestCaseResult?: (this: Reporter, test: Test, testCaseResult: TestCaseResult) => Promise<void> | void;
	onRunStart: (
		this: Reporter,
		results: AggregatedResult,
		options: { estimatedTime: number; showStatus: boolean },
	) => Promise<void> | void;
	onTestStart?: (this: Reporter, test: Test) => Promise<void> | void;
	onTestFileStart?: (this: Reporter, test: Test) => Promise<void> | void;
	onRunComplete: (this: Reporter, contexts: Set<Context>, results: AggregatedResult) => Promise<void> | void;
	getLastError: (this: Reporter) => unknown | void;
}

declare class Emittery {
	constructor(options?: object);
	logIfDebugEnabled: (this: Emittery, type_: any, eventName: any, eventData: any) => any;
	on: (this: Emittery, eventNames: any, listener: any) => () => void;
	off: (this: Emittery, eventNames: any, listener: any) => any;
	once: (this: Emittery, eventNames: any) => any;
	events: (this: Emittery, eventNames: any) => any;
	emit: (this: Emittery, eventName: any, eventData: any, allowMetaEvents?: any) => any;
	emitSerial: (this: Emittery, eventName: any, eventData: any, allowMetaEvents: any) => any;
	onAny: (this: Emittery, listener: any) => any;
	anyEvent: (this: Emittery) => any;
	offAny: (this: Emittery, listener: any) => () => void;
	clearListeners: (this: Emittery, eventNames: any) => any;
	listenerCount: (this: Emittery, eventNames: any) => any;
	bindMethods: (this: Emittery, target: any, methodNames: any) => any;
}

interface TestScheduler {
	addReporter: (this: TestScheduler, reporter: Reporter) => void;
	removeReporter: (this: TestScheduler, reporterConstructor: ReporterConstructor) => void;
	scheduleTests: (this: TestScheduler, tests: Array<Test>, watcher: TestWatcher) => Promise<AggregatedResult>;
}

export function createTestScheduler(
	globalConfig: ConfigTypes.GlobalConfig,
	context: TestSchedulerContext,
): Promise<TestScheduler>;

// runCLI

export function runCLI(
	cwdInstance: Instance,
	argv: ConfigTypes.Argv,
	projects: Array<Instance>,
): Promise<{ results: AggregatedResult; globalConfig: ConfigTypes.GlobalConfig }>;

// Config

export type Config = ConfigTypes.InitialOptions;

// TestWatcher

export interface TestWatcher extends Emittery {
	state: { interrupted: boolean };
	setState: (this: TestWatcher, state: { interrupted: boolean }) => Promise<void>;
	isInterrupted: (this: TestWatcher) => boolean;
	isWatchMode: (this: TestWatcher) => boolean;
}

export const TestWatcher: new (ref: { isWatchMode: boolean }) => TestWatcher;
