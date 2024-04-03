import Emittery from "./emittery";
import { Argv, GlobalConfig, Path, ProjectConfig } from "./config";

// SearchSource

interface Test {
	context: Context;
	duration?: number;
	path: Path;
	script: ModuleScript;
}

interface Context {
	config: ProjectConfig;
}

interface SearchResult {
	tests: Array<Test>;
	total?: number;
}

type FilterResult = { test: string; message: string };

type Filter = (testPaths: Array<string>) => Promise<{ filtered: Array<FilterResult> }>;

export class SearchSource {
	constructor(context: Record<string, any>);
	isTestFilePath(path: Path): boolean;
	findMatchingTests(testPathPattern?: string): SearchResult;
	getTestPaths(globalConfig: GlobalConfig, changedFiles?: undefined, filter?: Filter): Promise<SearchResult>;
}

// createTestScheduler

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
	onTestResult?(test: Test, testResult: TestResult, aggregatedResult: AggregatedResult): Promise<void> | void;
	onTestFileResult?(test: Test, testResult: TestResult, aggregatedResult: AggregatedResult): Promise<void> | void;
	onTestCaseResult?(test: Test, testCaseResult: TestCaseResult): Promise<void> | void;
	onRunStart(results: AggregatedResult, options: { estimatedTime: number; showStatus: boolean }): Promise<void> | void;
	onTestStart?(test: Test): Promise<void> | void;
	onTestFileStart?(test: Test): Promise<void> | void;
	onRunComplete(contexts: Set<Context>, results: AggregatedResult): Promise<void> | void;
	getLastError(): unknown | void;
}

interface ReporterContext {
	firstRun: boolean;
	previousSuccess: boolean;
	changedFiles?: Set<Path>;
	sourcesRelatedToTestsInChangedFiles?: Set<Path>;
	startRun?: (globalConfig: GlobalConfig) => unknown;
}

interface TestRunnerContext {
	changedFiles?: Set<Path>;
	sourcesRelatedToTestsInChangedFiles?: Set<Path>;
}

type TestSchedulerContext = ReporterContext | TestRunnerContext;

interface TestScheduler {
	addReporter(reporter: Reporter): void;
	removeReporter(ReporterClass: new () => any): void;
	scheduleTests(tests: Array<Test>, watcher: TestWatcher): Promise<AggregatedResult>;
	_setupReporters(): Promise<void>;
}

export function createTestScheduler(globalConfig: GlobalConfig, context: TestSchedulerContext): Promise<TestScheduler>;

// TestWatcher

type State = {
	interrupted: boolean;
};

export class TestWatcher extends Emittery<{ change: State }> {
	state: State;
	constructor({ isWatchMode }: { isWatchMode: boolean });
	setState(state: State): Promise<void>;
	isInterrupted(): boolean;
	isWatchMode(): boolean;
}

// runCLI

export function runCLI(
	cwdInstance: Instance,
	argv: Argv,
	projects: Array<Instance>,
): Promise<{ results: AggregatedResult; globalConfig: GlobalConfig }>;
