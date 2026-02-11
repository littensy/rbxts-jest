// Type definitions for Jest 27.5
// Project: https://jestjs.io/
// Definitions by: Asana (https://asana.com)
//                 Ivo Stratev <https://github.com/NoHomey>
//                 jwbay <https://github.com/jwbay>
//                 Alexey Svetliakov <https://github.com/asvetliakov>
//                 Alex Jover Morales <https://github.com/alexjoverm>
//                 Allan Lukwago <https://github.com/epicallan>
//                 Ika <https://github.com/ikatyang>
//                 Waseem Dahman <https://github.com/wsmd>
//                 Jamie Mason <https://github.com/JamieMason>
//                 Douglas Duteil <https://github.com/douglasduteil>
//                 Ahn <https://github.com/ahnpnl>
//                 Jeff Lau <https://github.com/UselessPickles>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Martin Hochel <https://github.com/hotell>
//                 Sebastian Sebald <https://github.com/sebald>
//                 Andy <https://github.com/andys8>
//                 Antoine Brault <https://github.com/antoinebrault>
//                 Gregor Stamać <https://github.com/gstamac>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Alex Bolenok <https://github.com/quassnoi>
//                 Mario Beltrán Alarcón <https://github.com/Belco90>
//                 Tony Hallett <https://github.com/tonyhallett>
//                 Jason Yu <https://github.com/ycmjason>
//                 Pawel Fajfer <https://github.com/pawfa>
//                 Regev Brody <https://github.com/regevbr>
//                 Alexandre Germain <https://github.com/gerkindev>
//                 Adam Jones <https://github.com/domdomegg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8
// File: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/4d1bc194ece739cc2aff2cae58888a864c51c76a/types/jest/index.d.ts

export declare const expect: jest.Expect;

export declare const beforeAll: jest.Lifecycle;
export declare const beforeEach: jest.Lifecycle;
export declare const afterAll: jest.Lifecycle;
export declare const afterEach: jest.Lifecycle;
export declare const describe: jest.Describe;
export declare const fdescribe: jest.Describe;
export declare const xdescribe: jest.Describe;
export declare const it: jest.It;
export declare const fit: jest.It;
export declare const xit: jest.It;
export declare const test: jest.It;
export declare const xtest: jest.It;

type ExtractEachCallbackArgs<T extends ReadonlyArray<any>> = {
	1: [T[0]];
	2: [T[0], T[1]];
	3: [T[0], T[1], T[2]];
	4: [T[0], T[1], T[2], T[3]];
	5: [T[0], T[1], T[2], T[3], T[4]];
	6: [T[0], T[1], T[2], T[3], T[4], T[5]];
	7: [T[0], T[1], T[2], T[3], T[4], T[5], T[6]];
	8: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7]];
	9: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8]];
	10: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9]];
	fallback: Array<T extends ReadonlyArray<infer U> ? U : any>;
}[T extends Readonly<[any]>
	? 1
	: T extends Readonly<[any, any]>
		? 2
		: T extends Readonly<[any, any, any]>
			? 3
			: T extends Readonly<[any, any, any, any]>
				? 4
				: T extends Readonly<[any, any, any, any, any]>
					? 5
					: T extends Readonly<[any, any, any, any, any, any]>
						? 6
						: T extends Readonly<[any, any, any, any, any, any, any]>
							? 7
							: T extends Readonly<[any, any, any, any, any, any, any, any]>
								? 8
								: T extends Readonly<[any, any, any, any, any, any, any, any, any]>
									? 9
									: T extends Readonly<[any, any, any, any, any, any, any, any, any, any]>
										? 10
										: "fallback"];

export declare namespace jest {
	/**
	 * `jest.globalEnv` represents the function environment table of the
	 * current test.
	 *
	 * You can use it with `jest.spyOn()` in place of an object, to mock the
	 * implementation of a function such as `print()` which lives in the
	 * environment table.
	 *
	 * You can also index into `globalEnv` to represent global libraries, such
	 * as `jest.globalEnv.math`, which allows you to mock the implementation of
	 * library functions such as `math.random()`.
	 *
	 * Finally, functions from the original function environment are available
	 *  as members of `globalEnv`, for example, the original implementation of
	 * `print()` (bypassing any current mocks) can be called via
	 * `jest.globalEnv.print()`.
	 */
	const globalEnv: { [name: string]: any };
	/**
	 * Clears the mock.calls and mock.instances properties of all mocks.
	 * Equivalent to calling .mockClear() on every mocked function.
	 */
	function clearAllMocks(): typeof jest;
	/**
	 * Resets the state of all mocks.
	 * Equivalent to calling .mockReset() on every mocked function.
	 */
	function resetAllMocks(): typeof jest;
	/**
	 * available since Jest 21.1.0
	 * Restores all mocks back to their original value.
	 * Equivalent to calling .mockRestore on every mocked function.
	 * Beware that jest.restoreAllMocks() only works when mock was created with
	 * jest.spyOn; other mocks will require you to manually restore them.
	 */
	function restoreAllMocks(): typeof jest;
	/**
	 * Removes any pending timers from the timer system. If any timers have
	 * been scheduled, they will be cleared and will never have the opportunity
	 * to execute in the future.
	 */
	function clearAllTimers(): typeof jest;
	/**
	 * Returns the number of fake timers still left to run.
	 */
	function getTimerCount(): number;
	/**
	 * Set the current system time used by fake timers. Simulates a user
	 * changing the system clock while your program is running. It affects the
	 * current time but it does not in itself cause e.g. timers to fire; they
	 * will fire exactly as they would have done without the call to
	 * jest.setSystemTime().
	 *
	 * > Note: This function is only available when using modern fake timers
	 * > implementation
	 */
	function setSystemTime(now?: number | DateTime): void;
	/**
	 * When mocking time, Date.now() will also be mocked. If you for some
	 * reason need access to the real current time, you can invoke this
	 * function.
	 *
	 * > Note: This function is only available when using modern fake timers
	 * > implementation
	 */
	function getRealSystemTime(): number;
	/**
	 * Mocks a module with an auto-mocked version when it is being required.
	 */
	// tslint:disable-next-line no-unnecessary-generics
	function doMock<T = unknown>(moduleScript: ModuleScript, factory?: () => T): typeof jest;
	/**
	 * Indicates that the module system should never return a mocked version
	 * of the specified module from require() (e.g. that it should always return the real module).
	 */
	function dontMock(moduleScript: ModuleScript): typeof jest;
    /**
     * Creates a mock function. Optionally takes a mock implementation.
     *
     * Returns a LuaTuple of [mock, mockFn]. The first value is the mock
     * object (callable table). The second is a forwarding function for
     * cases where a real function is required.
     *
     * @example
     * const [mock, mockFn] = jest.fn()
     * mockFn()
     * expect(mock).toHaveBeenCalled()
     */
    function fn(): LuaTuple<[Mock, (...args: any[]) => any]>;
    /**
     * Creates a mock function. Optionally takes a mock implementation.
     *
     * Returns a LuaTuple of [mock, mockFn]. The first value is the mock
     * object (callable table). The second is a forwarding function for
     * cases where a real function is required.
     *
     * @example
     * const [mock, mockFn] = jest.fn((x: number) => x + 1)
     * mockFn(1)
     * expect(mock).toHaveReturnedWith(2)
     */
    function fn<T, Y extends any[]>(implementation?: (...args: Y) => T): LuaTuple<[Mock<T, Y>, (...args: Y) => T]>;
	/**
	 * Returns whether the given function is a mock function.
	 */
	function isMockFunction(fn: any): fn is Mock;
	/**
	 * Mocks a module with an mocked version when it is being required. The
	 * second argument must be used to specify the value of the mocked module.
	 *
	 * Modules that are mocked with `jest.mock` are mocked only for the file
	 * that calls `jest.mock`. Another file that imports the module will get the
	 * original implementation even if it runs after the test file that mocks
	 * the module.
	 *
	 * Returns the jest object for chaining.
	 *
	 * @example
	 * ```lua
	 * -- mockedModule.lua
	 * return {}
	 * ```
	 *
	 * ```lua
	 * -- __tests__/testMockedModule.spec.lua
	 * beforeEach(function()
	 * 	jest.resetModules()
	 * 	jest.mock(Workspace.mockedModule, function()
	 * 		return {
	 * 			default = jest.fn(function() return 42 end),
	 * 			foo = jest.fn(function() return 43 end)
	 * 		}
	 * 	end)
	 * end)
	 *
	 * local mockedModule
	 *
	 * it("mockedModule should be mocked", function()
	 * 	mockedModule = require(Workspace.mockedModule)
	 * 	expect(mockedModule.default()).toBe(42)
	 * 	expect(mockedModule.foo()).toBe(43)
	 * end)
	 * ```
	 */
	function mock<T = unknown>(moduleScript: ModuleScript, factory?: () => T): typeof jest;

	/**
	 * Returns the actual module instead of a mock, bypassing all checks on
	 * whether the module should receive a mock implementation or not.
	 */
	// tslint:disable-next-line: no-unnecessary-generics
	function requireActual<TModule extends {} = any>(moduleScript: ModuleScript): TModule;
	/**
	 * Resets the module registry - the cache of all required modules. This is
	 * useful to isolate modules where local state might conflict between tests.
	 */
	function resetModules(): typeof jest;
	/**
	 * Creates a sandbox registry for the modules that are loaded inside the callback function..
	 * This is useful to isolate specific modules for every test so that local module state doesn't conflict between tests.
	 */
	function isolateModules(fn: () => void): typeof jest;
	/**
	 * Exhausts the micro-task queue (usually interfaced in node via process.nextTick).
	 */
	function runAllTicks(): typeof jest;
	/**
	 * Exhausts the macro-task queue (i.e., all tasks queued by `delay`).
	 *
	 * When this API is called, all pending macro-tasks will be executed. If those
	 * tasks themselves schedule new tasks, those will be continually exhausted until
	 * there are no more tasks remaining in the queue.
	 *
	 * This is often useful for synchronously executing `delay`s during a test in
	 * order to synchronously assert about some behavior that would only happen after
	 * the `delay` callbacks executed. See the Timer mocks doc for more information.
	 */
	function runAllTimers(): typeof jest;
	/**
	 * Executes only the macro-tasks that are currently pending (i.e., only the
	 * tasks that have been queued by setTimeout() or setInterval() up to this point).
	 * If any of the currently pending macro-tasks schedule new macro-tasks,
	 * those new tasks will not be executed by this call.
	 */
	function runOnlyPendingTimers(): typeof jest;
	/**
	 * Advances all timers by msToRun milliseconds. All pending "macro-tasks" that have been
	 * queued via setTimeout() or setInterval(), and would be executed within this timeframe
	 * will be executed.
	 */
	function advanceTimersByTime(msToRun: number): typeof jest;
	/**
	 * Advances all timers by the needed milliseconds so that only the next
	 * timeouts/intervals will run. Optionally, you can provide steps, so it
	 * will run steps amount of next timeouts/intervals.
	 */
	function advanceTimersToNextTimer(step?: number): void;
	/**
	 * Explicitly supplies the mock object that the module system should return
	 * for the specified module.
	 */
	// tslint:disable-next-line: no-unnecessary-generics
	function setMock<T>(moduleScript: ModuleScript, moduleExports: T): typeof jest;
	/**
	 * Creates a mock function similar to jest.fn but also tracks calls to `object[methodName]`
	 *
	 * Note: By default, jest.spyOn also calls the spied method. This is different behavior from most
	 * other test libraries.
	 *
	 * @example
	 *
	 * const video = require('./video');
	 *
	 * test('plays video', () => {
	 *   const spy = jest.spyOn(video, 'play');
	 *   const isPlaying = video.play();
	 *
	 *   expect(spy).toHaveBeenCalled();
	 *   expect(isPlaying).toBe(true);
	 *
	 *   spy.mockReset();
	 *   spy.mockRestore();
	 * });
	 */
	// The jest.spyOn(object, methodName, accessType?) variant is not currently supported in jest-roblox.
	// function spyOn<T extends {}, M extends NonFunctionPropertyNames<Required<T>>>(
	// 	object: T,
	// 	method: M,
	// 	accessType: "get",
	// ): SpyInstance<Required<T>[M], []>;
	// function spyOn<T extends {}, M extends NonFunctionPropertyNames<Required<T>>>(
	// 	object: T,
	// 	method: M,
	// 	accessType: "set",
	// ): SpyInstance<void, [Required<T>[M]]>;
	function spyOn<T extends {}, M extends FunctionPropertyNames<Required<T>>>(
		object: T,
		method: M,
	): Required<T>[M] extends (...args: any[]) => any
		? SpyInstance<ReturnType<Required<T>[M]>, ArgsType<Required<T>[M]>>
		: never;
	function spyOn<T extends {}, M extends ConstructorPropertyNames<Required<T>>>(
		object: T,
		method: M,
	): Required<T>[M] extends new (...args: any[]) => any
		? SpyInstance<InstanceType<Required<T>[M]>, ConstructorArgsType<Required<T>[M]>>
		: never;
	/**
	 * Indicates that the module system should never return a mocked version of
	 * the specified module from require() (e.g. that it should always return the real module).
	 */
	function unmock(moduleScript: ModuleScript): typeof jest;
	/**
	 * Instructs Jest Lua to use fake versions of the standard Lua and Roblox timer
	 * functions (`delay`, `tick`, `os.time`, `os.clock`, `task.delay` as well as `DateTime`).
	 */
	function useFakeTimers(implementation?: "modern" | "legacy"): typeof jest;
	/**
	 * Instructs Jest to use the real versions of the standard timer functions.
	 */
	function useRealTimers(): typeof jest;
	/**
	 * Sets the frame time, in milliseconds, by which all advance timer methods process timers.
	 * `frameTimeMs` must be a value greater than or equal to `0`; by default, `frameTimeMs`
	 * is set to `0` (i.e. continuous time).
	 */
	function setEngineFrameTime(frameTimeMs: number): void;
	/**
	 * Gets the frame time by which timers are processed.
	 */
	function getEngineFrameTime(): number;

	type MockableFunction = (...args: any[]) => any;
	type MethodKeysOf<T> = { [K in keyof T]: T[K] extends MockableFunction ? K : never }[keyof T];
	type PropertyKeysOf<T> = { [K in keyof T]: T[K] extends MockableFunction ? never : K }[keyof T];
	type ArgumentsOf<T> = T extends (...args: infer A) => any ? A : never;
	type ConstructorArgumentsOf<T> = T extends new (...args: infer A) => any ? A : never;

	interface MockWithArgs<T extends MockableFunction> extends MockInstance<ReturnType<T>, ArgumentsOf<T>> {
		new (...args: ConstructorArgumentsOf<T>): T;
		(...args: ArgumentsOf<T>): ReturnType<T>;
	}
	type MaybeMockedConstructor<T> = T extends new (...args: any[]) => infer R
		? MockInstance<R, ConstructorArgumentsOf<T>>
		: T;
	type MockedFn<T extends MockableFunction> = MockWithArgs<T> & { [K in keyof T]: T[K] };
	type MockedFunctionDeep<T extends MockableFunction> = MockWithArgs<T> & MockedObjectDeep<T>;
	type MockedObject<T> = MaybeMockedConstructor<T> & {
		[K in MethodKeysOf<T>]: T[K] extends MockableFunction ? MockedFn<T[K]> : T[K];
	} & { [K in PropertyKeysOf<T>]: T[K] };
	type MockedObjectDeep<T> = MaybeMockedConstructor<T> & {
		[K in MethodKeysOf<T>]: T[K] extends MockableFunction ? MockedFunctionDeep<T[K]> : T[K];
	} & { [K in PropertyKeysOf<T>]: MaybeMockedDeep<T[K]> };
	type MaybeMockedDeep<T> = T extends MockableFunction
		? MockedFunctionDeep<T>
		: T extends object // eslint-disable-line @typescript-eslint/ban-types
			? MockedObjectDeep<T>
			: T;
	// eslint-disable-next-line @typescript-eslint/ban-types
	type MaybeMocked<T> = T extends MockableFunction ? MockedFn<T> : T extends object ? MockedObject<T> : T;
	type EmptyFunction = () => void;
	type ArgsType<T> = T extends (...args: infer A) => any ? A : never;
	type ConstructorArgsType<T> = T extends new (...args: infer A) => any ? A : never;
	type RejectedValue<T> = T extends PromiseLike<any> ? any : never;
	type ResolvedValue<T> = T extends PromiseLike<infer U> ? U | T : never;
	// see https://github.com/Microsoft/TypeScript/issues/25215
	type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends (...args: any[]) => any ? never : K }[keyof T] &
		string;
	type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never }[keyof T] &
		string;
	type ConstructorPropertyNames<T> = { [K in keyof T]: T[K] extends new (...args: any[]) => any ? K : never }[keyof T] &
		string;

	interface DoneCallback {
		(...args: any[]): any;
		fail(error?: string | { message: string }): any;
	}

	type ProvidesCallback =
		| ((context: Record<string, any>, cb: DoneCallback) => void | undefined)
		| (() => Promise<unknown>);
	type ProvidesHookCallback = (() => any) | ProvidesCallback;

	type Lifecycle = (fn: ProvidesHookCallback, timeout?: number) => any;

	interface FunctionLike {
		readonly name: string;
	}

	interface Each {
		// Exclusively arrays.
		<T extends any[] | [any]>(
			cases: ReadonlyArray<T>,
		): (name: string, fn: (...args: T) => any, timeout?: number) => void;
		<T extends ReadonlyArray<any>>(
			cases: ReadonlyArray<T>,
		): (name: string, fn: (...args: ExtractEachCallbackArgs<T>) => any, timeout?: number) => void;
		// Not arrays.
		<T>(cases: ReadonlyArray<T>): (name: string, fn: (...args: T[]) => any, timeout?: number) => void;
		(cases: ReadonlyArray<ReadonlyArray<any>>): (name: string, fn: (...args: any[]) => any, timeout?: number) => void;
		(
			strings: TemplateStringsArray,
			...placeholders: any[]
		): (name: string, fn: (arg: any) => any, timeout?: number) => void;
	}

	/**
	 * Creates a test closure
	 */
	interface It {
		/**
		 * Creates a test closure.
		 *
		 * @param name The name of your test
		 * @param fn The function for your test
		 * @param timeout The timeout for an async function test
		 */
		(name: string, fn?: ProvidesCallback, timeout?: number): void;
		/**
		 * Only runs this test in the current file.
		 */
		only: It;
		/**
         * Mark this test as expecting to fail.
         *
         * Only available in the default `jest-circus` runner.
         */
        failing: It;
		/**
		 * Skips running this test in the current file.
		 */
		skip: It;
		/**
		 * Sketch out which tests to write in the future.
		 */
		todo: It;
		/**
		 * Experimental and should be avoided.
		 */
		concurrent: It;
		/**
		 * Use if you keep duplicating the same test with different data. `.each` allows you to write the
		 * test once and pass data in.
		 *
		 * `.each` is available with two APIs:
		 *
		 * #### 1  `test.each(table)(name, fn)`
		 *
		 * - `table`: Array of Arrays with the arguments that are passed into the test fn for each row.
		 * - `name`: String the title of the test block.
		 * - `fn`: Function the test to be ran, this is the function that will receive the parameters in each row as function arguments.
		 *
		 *
		 * #### 2  `test.each table(name, fn)`
		 *
		 * - `table`: Tagged Template Literal
		 * - `name`: String the title of the test, use `$variable` to inject test data into the test title from the tagged template expressions.
		 * - `fn`: Function the test to be ran, this is the function that will receive the test data object..
		 *
		 * @example
		 *
		 * // API 1
		 * test.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
		 *   '.add(%i, %i)',
		 *   (a, b, expected) => {
		 *     expect(a + b).toBe(expected);
		 *   },
		 * );
		 *
		 * // API 2
		 * test.each`
		 * a    | b    | expected
		 * ${1} | ${1} | ${2}
		 * ${1} | ${2} | ${3}
		 * ${2} | ${1} | ${3}
		 * `('returns $expected when $a is added $b', ({a, b, expected}) => {
		 *    expect(a + b).toBe(expected);
		 * });
		 *
		 */
		each: Each;
	}

	interface Describe {
		// tslint:disable-next-line ban-types
		(name: number | string | Callback | FunctionLike, fn: EmptyFunction): void;
		/** Only runs the tests inside this `describe` for the current file */
		only: Describe;
		/** Skips running the tests inside this `describe` for the current file */
		skip: Describe;
		each: Each;
	}

	type EqualityTester = (a: any, b: any) => boolean | undefined;

	interface MatcherUtils {
		readonly isNever: boolean;
		readonly dontThrow: () => void;
		readonly promise: string;
		readonly assertionCalls: number;
		readonly expectedAssertionsNumber: number | undefined;
		readonly isExpectingAssertions: boolean;
		readonly suppressedErrors: any[];
		readonly expand: boolean;
		readonly testPath: string;
		readonly currentTestName: string;
		utils: typeof import("@rbxts/jest-matcher-utils") & {
			iterableEquality: EqualityTester;
			subsetEquality: EqualityTester;
		};
		/**
		 *  This is a deep-equality function that will return true if two objects have the same values (recursively).
		 */
		equals(this: void, a: any, b: any, customTesters?: EqualityTester[], strictCheck?: boolean): boolean;
		[other: string]: any;
	}

	interface ExpectExtendMap {
		[key: string]: CustomMatcher;
	}

	type MatcherContext = MatcherUtils & Readonly<MatcherState>;
	type CustomMatcher = (
		this: MatcherContext,
		received: any,
		...actual: any[]
	) => CustomMatcherResult | Promise<CustomMatcherResult>;

	interface CustomMatcherResult {
		pass: boolean;
		message: () => string;
	}

	type SnapshotSerializerPlugin = import("@rbxts/pretty-format").Plugin;

	interface InverseAsymmetricMatchers {
		/**
		 * `expect.not.arrayContaining(array)` matches a received array which
		 * does not contain all of the elements in the expected array. That is,
		 * the expected array is not a subset of the received array. It is the
		 * inverse of `expect.arrayContaining`.
		 *
		 * Optionally, you can provide a type for the elements via a generic.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		arrayContaining<E = any>(this: void, arr: E[]): AsymmetricMatcher;
		/**
		 * `expect.not.objectContaining(object)` matches any received object
		 * that does not recursively match the expected properties. That is, the
		 * expected object is not a subset of the received object. Therefore,
		 * it matches a received object which contains properties that are not
		 * in the expected object. It is the inverse of `expect.objectContaining`.
		 *
		 * Optionally, you can provide a type for the object via a generic.
		 * This ensures that the object contains the desired structure.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		objectContaining<E = {}>(this: void, obj: E): AsymmetricMatcher;
		/**
		 * `expect.not.stringMatching(string | regexp)` matches the received
		 * string that does not match the expected regexp. It is the inverse of
		 * `expect.stringMatching`.
		 */
		stringMatching(this: void, str: string): AsymmetricMatcher;
		/**
		 * `expect.not.stringContaining(string)` matches the received string
		 * that does not contain the exact expected string. It is the inverse of
		 * `expect.stringContaining`.
		 */
		stringContaining(this: void, str: string): AsymmetricMatcher;
		/**
		 * `expect.never.callable()` matches anything that is not callable.
		 * It is the inverse of `expect.callable`.
		 */
		callable(this: void): AsymmetricMatcher;
	}
	interface MatcherState {
		assertionCalls: number;
		currentTestName: string;
		expand: boolean;
		expectedAssertionsNumber: number;
		isExpectingAssertions?: boolean | undefined;
		suppressedErrors: defined[];
		testPath: string;
	}
	/**
	 * The `expect` function is used every time you want to test a value.
	 * You will rarely call `expect` by itself.
	 */
	interface Expect {
		/**
		 * The `expect` function is used every time you want to test a value.
		 * You will rarely call `expect` by itself.
		 *
		 * @param actual The value to apply matchers against.
		 */
		<T = any>(actual: T): JestMatchers<T>;
		/**
		 * Matches anything but null or undefined. You can use it inside `toEqual` or `toBeCalledWith` instead
		 * of a literal value. For example, if you want to check that a mock function is called with a
		 * non-null argument:
		 *
		 * @example
		 *
		 * test('map calls its argument with a non-null argument', () => {
		 *   const mock = jest.fn();
		 *   [1].map(x => mock(x));
		 *   expect(mock).toBeCalledWith(expect.anything());
		 * });
		 *
		 */
		anything(this: void): AsymmetricMatcher;
		/**
		 * Matches anything that was created with the given constructor.
		 * You can use it inside `toEqual` or `toBeCalledWith` instead of a literal value.
		 *
		 * @example
		 *
		 * function randocall(fn) {
		 *   return fn(Math.floor(Math.random() * 6 + 1));
		 * }
		 *
		 * test('randocall calls its callback with a number', () => {
		 *   const mock = jest.fn();
		 *   randocall(mock);
		 *   expect(mock).toBeCalledWith(expect.any(Number));
		 * });
		 */
		any(this: void, classType: any): AsymmetricMatcher;
		/**
		 * Matches only `nil`. You can use it inside `toEqual`, `toMatchObject`,
		 * `toBeCalledWith`, or similar matchers instead of a literal value. For example,
		 * if you want to check that a value is left undefined in a table:
		 *
		 * @example
		 *
		 * test('mock calls its argument with a nil argument', () => {
		 *   const expected = {
		 *     foo: "bar",
		 *     baz: expect.nothing(),
		 *   };
		 *   mock();
		 *   expect({ foo = "bar" }).toMatchObject({ expected });
		 * });
		 */
		nothing(this: void): AsymmetricMatcher;
		/**
		 * Matches anything that behaves like a function, including callable
		 * tables and callable userdata. Prefer over `expect.any("function")`
		 * unless you care about the underlying data type.
		 */
		callable(this: void): AsymmetricMatcher;
		/**
		 * Matches any array made up entirely of elements in the provided array.
		 * You can use it inside `toEqual` or `toBeCalledWith` instead of a literal value.
		 *
		 * Optionally, you can provide a type for the elements via a generic.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		arrayContaining<E = any>(this: void, arr: E[]): AsymmetricMatcher;
		/**
		 * Verifies that a certain number of assertions are called during a test.
		 * This is often useful when testing asynchronous code, in order to
		 * make sure that assertions in a callback actually got called.
		 */
		assertions(this: void, num: number): void;
		/**
		 * Verifies that at least one assertion is called during a test.
		 * This is often useful when testing asynchronous code, in order to
		 * make sure that assertions in a callback actually got called.
		 */
		hasAssertions(this: void): void;
		/**
		 * You can use `expect.extend` to add your own matchers to Jest.
		 */
		extend(this: void, obj: ExpectExtendMap): void;
		/**
		 * Adds a module to format application-specific data structures for serialization.
		 */
		addSnapshotSerializer(this: void, serializer: SnapshotSerializerPlugin): void;
		/**
		 * Matches any object that recursively matches the provided keys.
		 * This is often handy in conjunction with other asymmetric matchers.
		 *
		 * Optionally, you can provide a type for the object via a generic.
		 * This ensures that the object contains the desired structure.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		objectContaining<E = {}>(this: void, obj: E): AsymmetricMatcher;
		/**
		 * Matches any string that contains the provided Lua string pattern
		 */
		stringMatching(this: void, str: string): AsymmetricMatcher;
		/**
		 * Matches any received string that contains the exact expected string
		 */
		stringContaining(this: void, str: string): AsymmetricMatcher;

		never: InverseAsymmetricMatchers;

		setState(this: void, state: object): void;
		getState(this: void): MatcherState & Record<string, any>;
	}

	type JestMatchers<T> = JestMatchersShape<Matchers<void, T>, Matchers<Promise<void>, T>>;

	type JestMatchersShape<TNonPromise extends {} = {}, TPromise extends {} = {}> = {
		/**
		 * Use resolves to unwrap the value of a fulfilled promise so any other
		 * matcher can be chained. If the promise is rejected the assertion fails.
		 */
		resolves: AndNot<TPromise>;
		/**
		 * Unwraps the reason of a rejected promise so any other matcher can be chained.
		 * If the promise is fulfilled the assertion fails.
		 */
		rejects: AndNot<TPromise>;
	} & AndNot<TNonPromise>;
	type AndNot<T> = T & {
		never: T;
	};

	// should be R extends void|Promise<void> but getting dtslint error
	interface Matchers<R, T = {}> {
		/**
		 * Ensures the last call to a mock function was provided specific args.
		 *
		 * Optionally, you can provide a type for the expected arguments via a generic.
		 * Note that the type must be either an array or a tuple.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		lastCalledWith<E extends any[]>(this: void, ...args: E): R;
		/**
		 * Ensure that the last call to a mock function has returned a specified value.
		 *
		 * Optionally, you can provide a type for the expected value via a generic.
		 * This is particularly useful for ensuring expected objects have the right structure.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		lastReturnedWith<E = any>(this: void, value: E): R;
		/**
		 * Ensure that a mock function is called with specific arguments on an Nth call.
		 *
		 * Optionally, you can provide a type for the expected arguments via a generic.
		 * Note that the type must be either an array or a tuple.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		nthCalledWith<E extends any[]>(this: void, nthCall: number, ...params: E): R;
		/**
		 * Ensure that the nth call to a mock function has returned a specified value.
		 *
		 * Optionally, you can provide a type for the expected value via a generic.
		 * This is particularly useful for ensuring expected objects have the right structure.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		nthReturnedWith<E = any>(this: void, n: number, value: E): R;
		/**
		 * Checks that a value is what you expect. It uses `Object.is` to check strict equality.
		 * Don't use `toBe` with floating-point numbers.
		 *
		 * Optionally, you can provide a type for the expected value via a generic.
		 * This is particularly useful for ensuring expected objects have the right structure.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		toBe<E = any>(this: void, expected: E): R;
		/**
		 * Ensures that a mock function is called.
		 */
		toBeCalled(this: void): R;
		/**
		 * Ensures that a mock function is called an exact number of times.
		 */
		toBeCalledTimes(this: void, expected: number): R;
		/**
		 * Ensure that a mock function is called with specific arguments.
		 *
		 * Optionally, you can provide a type for the expected arguments via a generic.
		 * Note that the type must be either an array or a tuple.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		toBeCalledWith<E extends any[]>(this: void, ...args: E): R;
		/**
		 * Using exact equality with floating point numbers is a bad idea.
		 * Rounding means that intuitive things fail.
		 * The default for numDigits is 2.
		 */
		toBeCloseTo(this: void, expected: number, numDigits?: number): R;
		/**
		 * Ensure that a variable is not `nil`.
		 *
		 * Note: `.toBeDefined` is functionally identical to `.never.toBeNil()` and
		 * usage of the latter is preferred.
		 */
		toBeDefined(this: void): R;
		/**
		 * When you don't care what a value is, you just want to
		 * ensure a value is false in a boolean context.
		 */
		toBeFalsy(this: void): R;
		/**
		 * For comparing floating point numbers.
		 */
		toBeGreaterThan(this: void, expected: number): R;
		/**
		 * For comparing floating point numbers.
		 */
		toBeGreaterThanOrEqual(this: void, expected: number): R;
		/**
		 * Ensure that an object is an instance of a class.
		 * This matcher uses `instanceof` underneath.
		 *
		 * Optionally, you can provide a type for the expected value via a generic.
		 * This is particularly useful for ensuring expected objects have the right structure.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		toBeInstanceOf<E = any>(this: void, expected: E): R;
		/**
		 * For comparing floating point numbers.
		 */
		toBeLessThan(this: void, expected: number): R;
		/**
		 * For comparing floating point numbers.
		 */
		toBeLessThanOrEqual(this: void, expected: number): R;
		/**
		 * This is the same as `.toBe(null)` but the error messages are a bit nicer.
		 * So use `.toBeNull()` when you want to check that something is null.
		 */
		toBeNull(this: void): R;
		/**
		 * Use when you don't care what a value is, you just want to ensure a value
		 * is true in a boolean context. In JavaScript, there are six falsy values:
		 * `false`, `0`, `''`, `null`, `undefined`, and `NaN`. Everything else is truthy.
		 */
		toBeTruthy(this: void): R;
		/**
		 * Used to check that a variable is undefined.
		 *
		 * Note: `.toBeUndefined` is functionally identical to `.toBeNil()` and usage
		 * of the latter is preferred.
		 */
		toBeUndefined(this: void): R;
		/**
		 * Used to check that a variable is undefined.
		 */
		toBeNil(this: void): R;
		/**
		 * Used to check that a variable is NaN.
		 */
		toBeNaN(this: void): R;
		/**
		 * Used when you want to check that an item is in a list.
		 * For testing the items in the list, this uses `===`, a strict equality check.
		 * It can also check whether a string is a substring of another string.
		 *
		 * Optionally, you can provide a type for the expected value via a generic.
		 * This is particularly useful for ensuring expected objects have the right structure.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		toContain<E = any>(this: void, expected: E): R;
		/**
		 * Used when you want to check that an item is in a list.
		 * For testing the items in the list, this matcher recursively checks the
		 * equality of all fields, rather than checking for object identity.
		 *
		 * Optionally, you can provide a type for the expected value via a generic.
		 * This is particularly useful for ensuring expected objects have the right structure.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		toContainEqual<E = any>(this: void, expected: E): R;
		/**
		 * Used when you want to check that two objects have the same value.
		 * This matcher recursively checks the equality of all fields, rather than checking for object identity.
		 *
		 * Optionally, you can provide a type for the expected value via a generic.
		 * This is particularly useful for ensuring expected objects have the right structure.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		toEqual<E = any>(this: void, expected: E): R;
		/**
		 * Ensures that a mock function is called.
		 */
		toHaveBeenCalled(this: void): R;
		/**
		 * Ensures that a mock function is called an exact number of times.
		 */
		toHaveBeenCalledTimes(this: void, expected: number): R;
		/**
		 * Ensure that a mock function is called with specific arguments.
		 *
		 * Optionally, you can provide a type for the expected arguments via a generic.
		 * Note that the type must be either an array or a tuple.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		toHaveBeenCalledWith<E extends any[]>(this: void, ...params: E): R;
		/**
		 * Ensure that a mock function is called with specific arguments on an Nth call.
		 *
		 * Optionally, you can provide a type for the expected arguments via a generic.
		 * Note that the type must be either an array or a tuple.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		toHaveBeenNthCalledWith<E extends any[]>(this: void, nthCall: number, ...params: E): R;
		/**
		 * If you have a mock function, you can use `.toHaveBeenLastCalledWith`
		 * to test what arguments it was last called with.
		 *
		 * Optionally, you can provide a type for the expected arguments via a generic.
		 * Note that the type must be either an array or a tuple.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		toHaveBeenLastCalledWith<E extends any[]>(this: void, ...params: E): R;
		/**
		 * Use to test the specific value that a mock function last returned.
		 * If the last call to the mock function threw an error, then this matcher will fail
		 * no matter what value you provided as the expected return value.
		 *
		 * Optionally, you can provide a type for the expected value via a generic.
		 * This is particularly useful for ensuring expected objects have the right structure.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		toHaveLastReturnedWith<E = any>(this: void, expected: E): R;
		/**
		 * Use `.toHaveLength` to check that an (array-like) table or string has a certain length.
		 * It calls the `#` operator and since `#` is only well defined for non-sparse array-like
		 * tables and strings it will return 0 for tables with key-value pairs.
		 * It checks the `.length` property of the table instead if it has one.
		 *
		 * This is especially useful for checking arrays or strings size.
		 */
		toHaveLength(this: void, expected: number): R;
		/**
		 * Use to test the specific value that a mock function returned for the nth call.
		 * If the nth call to the mock function threw an error, then this matcher will fail
		 * no matter what value you provided as the expected return value.
		 *
		 * Optionally, you can provide a type for the expected value via a generic.
		 * This is particularly useful for ensuring expected objects have the right structure.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		toHaveNthReturnedWith<E = any>(this: void, nthCall: number, expected: E): R;
		/**
		 * Use to check if property at provided reference keyPath exists for an object.
		 * For checking deeply nested properties in an object you may use dot notation or an array containing
		 * the keyPath for deep references.
		 *
		 * Optionally, you can provide a value to check if it's equal to the value present at keyPath
		 * on the target object. This matcher uses 'deep equality' (like `toEqual()`) and recursively checks
		 * the equality of all fields.
		 *
		 * @example
		 *
		 * expect(houseForSale).toHaveProperty('kitchen.area', 20);
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		toHaveProperty<E = any>(this: void, propertyPath: string | any[], value?: E): R;
		/**
		 * Use to test that the mock function successfully returned (i.e., did not throw an error) at least one time
		 */
		toHaveReturned(this: void): R;
		/**
		 * Use to ensure that a mock function returned successfully (i.e., did not throw an error) an exact number of times.
		 * Any calls to the mock function that throw an error are not counted toward the number of times the function returned.
		 */
		toHaveReturnedTimes(this: void, expected: number): R;
		/**
		 * Use to ensure that a mock function returned a specific value.
		 *
		 * Optionally, you can provide a type for the expected value via a generic.
		 * This is particularly useful for ensuring expected objects have the right structure.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		toHaveReturnedWith<E = any>(this: void, expected: E): R;
		/**
		 * Check that a string matches a Lua string pattern or regular expression.
		 */
		toMatch(this: void, expected: string): R;
		/**
		 * Used to check that a JavaScript object matches a subset of the properties of an object
		 *
		 * Optionally, you can provide an object to use as Generic type for the expected value.
		 * This ensures that the matching object matches the structure of the provided object-like type.
		 *
		 * @example
		 *
		 * type House = {
		 *   bath: boolean;
		 *   bedrooms: number;
		 *   kitchen: {
		 *     amenities: string[];
		 *     area: number;
		 *     wallColor: string;
		 *   }
		 * };
		 *
		 * expect(desiredHouse).toMatchObject<House>({...standardHouse, kitchen: {area: 20}}) // wherein standardHouse is some base object of type House
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		toMatchObject<E extends {} | any[]>(this: void, expected: E): R;
		/**
		 * Use `.toMatchInstance` to check that a Roblox Instance and its children matches
		 * all the properties defined in an expected table.
		 *
		 * If a ClassName property is not in the table, the expected table will match against
		 * any class. To check that the received Instance is of a specific type, pass in a
		 * ClassName property.
		 */
		toMatchInstance<E extends {}>(this: void, expected: E): R;
		/**
		 * This ensures that a value matches the most recent snapshot with property matchers.
		 * Check out [the Snapshot Testing guide](http://facebook.github.io/jest/docs/snapshot-testing.html) for more information.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		toMatchSnapshot<U extends { [P in keyof T]: any }>(
			this: void,
			propertyMatchers: Partial<U>,
			snapshotName?: string,
		): R;
		/**
		 * This ensures that a value matches the most recent snapshot.
		 * Check out [the Snapshot Testing guide](http://facebook.github.io/jest/docs/snapshot-testing.html) for more information.
		 */
		toMatchSnapshot(this: void, snapshotName?: string): R;
		/**
		 * This ensures that a value matches the most recent snapshot with property matchers.
		 * Instead of writing the snapshot value to a .snap file, it will be written into the source code automatically.
		 * Check out [the Snapshot Testing guide](http://facebook.github.io/jest/docs/snapshot-testing.html) for more information.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		toMatchInlineSnapshot<U extends { [P in keyof T]: any }>(
			this: void,
			propertyMatchers: Partial<U>,
			snapshot?: string,
		): R;
		/**
		 * This ensures that a value matches the most recent snapshot with property matchers.
		 * Instead of writing the snapshot value to a .snap file, it will be written into the source code automatically.
		 * Check out [the Snapshot Testing guide](http://facebook.github.io/jest/docs/snapshot-testing.html) for more information.
		 */
		toMatchInlineSnapshot(this: void, snapshot?: string): R;
		/**
		 * Ensure that a mock function has returned (as opposed to thrown) at least once.
		 */
		toReturn(this: void): R;
		/**
		 * Ensure that a mock function has returned (as opposed to thrown) a specified number of times.
		 */
		toReturnTimes(this: void, count: number): R;
		/**
		 * Ensure that a mock function has returned a specified value at least once.
		 *
		 * Optionally, you can provide a type for the expected value via a generic.
		 * This is particularly useful for ensuring expected objects have the right structure.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		toReturnWith<E = any>(this: void, value: E): R;
		/**
		 * Use to test that objects have the same types as well as structure.
		 *
		 * Optionally, you can provide a type for the expected value via a generic.
		 * This is particularly useful for ensuring expected objects have the right structure.
		 *
		 * Lua tables that follow metatable inheritance patterns will also be checked for type equality.
		 */
		// tslint:disable-next-line: no-unnecessary-generics
		toStrictEqual<E = any>(this: void, expected: E): R;
		/**
		 * Used to test that a function throws when it is called.
		 */
		toThrow(this: void, error?: string | Constructable | unknown): R;
		/**
		 * If you want to test that a specific error is thrown inside a function.
		 */
		toThrowError(this: void, error?: string | Constructable | unknown): R;
		/**
		 * Used to test that a function throws a error matching the most recent snapshot when it is called.
		 */
		toThrowErrorMatchingSnapshot(this: void, snapshotName?: string): R;
		/**
		 * Used to test that a function throws a error matching the most recent snapshot when it is called.
		 * Instead of writing the snapshot value to a .snap file, it will be written into the source code automatically.
		 */
		toThrowErrorMatchingInlineSnapshot(this: void, snapshot?: string): R;
	}

	type RemoveFirstFromTuple<T extends any[]> = T["size"] extends 0
		? []
		: ((...b: T) => void) extends (a: any, ...b: infer I) => void
			? I
			: [];

	interface AsymmetricMatcher {
		asymmetricMatch(other: unknown): boolean;
		getExpectedType(): string;
		toAsymmetricMatcher(): string;
		toString(): string;
	}
	type NonAsyncMatchers<TMatchers extends ExpectExtendMap> = {
		[K in keyof TMatchers]: ReturnType<TMatchers[K]> extends Promise<CustomMatcherResult> ? never : K;
	}[keyof TMatchers];
	type CustomAsyncMatchers<TMatchers extends ExpectExtendMap> = {
		[K in NonAsyncMatchers<TMatchers>]: CustomAsymmetricMatcher<TMatchers[K]>;
	};
	type CustomAsymmetricMatcher<TMatcher extends (...args: any[]) => any> = (
		...args: RemoveFirstFromTuple<Parameters<TMatcher>>
	) => AsymmetricMatcher;

	// should be TMatcherReturn extends void|Promise<void> but getting dtslint error
	type CustomJestMatcher<TMatcher extends (...args: any[]) => any, TMatcherReturn> = (
		...args: RemoveFirstFromTuple<Parameters<TMatcher>>
	) => TMatcherReturn;

	type ExpectProperties = {
		[K in keyof Expect]: Expect[K];
	};
	// should be TMatcherReturn extends void|Promise<void> but getting dtslint error
	// Use the `void` type for return types only. Otherwise, use `undefined`. See: https://github.com/Microsoft/dtslint/blob/master/docs/void-return.md
	// have added issue https://github.com/microsoft/dtslint/issues/256 - Cannot have type union containing void ( to be used as return type only
	type ExtendedMatchers<TMatchers extends ExpectExtendMap, TMatcherReturn, TActual> = Matchers<
		TMatcherReturn,
		TActual
	> & { [K in keyof TMatchers]: CustomJestMatcher<TMatchers[K], TMatcherReturn> };
	type JestExtendedMatchers<TMatchers extends ExpectExtendMap, TActual> = JestMatchersShape<
		ExtendedMatchers<TMatchers, void, TActual>,
		ExtendedMatchers<TMatchers, Promise<void>, TActual>
	>;

	// when have called expect.extend
	type ExtendedExpectFunction<TMatchers extends ExpectExtendMap> = <TActual>(
		actual: TActual,
	) => JestExtendedMatchers<TMatchers, TActual>;

	type ExtendedExpect<TMatchers extends ExpectExtendMap> = ExpectProperties &
		AndNot<CustomAsyncMatchers<TMatchers>> &
		ExtendedExpectFunction<TMatchers>;

	// FIXME: Extending 'JestMatchersShape<any>' here throws a type error in 'Omit' below
	type NonPromiseMatchers<T extends JestMatchersShape> = Omit<T, "resolves" | "rejects" | "never">;
	type PromiseMatchers<T extends JestMatchersShape> = Omit<T["resolves"], "never">;

	interface Constructable {
		new (...args: any[]): any;
	}

	interface Mock<T = any, Y extends any[] = any> extends Callback, MockInstance<T, Y> {
		new (...args: Y): T;
		(...args: Y): T;
	}

	interface SpyInstance<T = any, Y extends any[] = any> extends MockInstance<T, Y> {}

	/**
	 * Represents a function that has been spied on.
	 */
	type SpiedFunction<T extends (...args: any[]) => any> = SpyInstance<ReturnType<T>, ArgsType<T>>;

	/**
	 * Wrap a function with mock definitions
	 *
	 * @example
	 *
	 *  import { myFunction } from "./library";
	 *  jest.mock("./library");
	 *
	 *  const mockMyFunction = myFunction as jest.MockedFunction<typeof myFunction>;
	 *  expect(mockMyFunction.mock.calls[0][0]).toBe(42);
	 */
	type MockedFunction<T extends (...args: any[]) => any> = MockInstance<ReturnType<T>, ArgsType<T>> & T;

	/**
	 * Wrap a class with mock definitions
	 *
	 * @example
	 *
	 *  import { MyClass } from "./library";
	 *  jest.mock("./library");
	 *
	 *  const mockedMyClass = MyClass as jest.MockedClass<typeof MyClass>;
	 *
	 *  expect(mockedMyClass.mock.calls[0][0]).toBe(42); // Constructor calls
	 *  expect(mockedMyClass.prototype.myMethod.mock.calls[0][0]).toBe(42); // Method calls
	 */

	type MockedClass<T extends Constructable> = MockInstance<
		InstanceType<T>,
		T extends new (...args: infer P) => any ? P : never
	> & {
		prototype: T extends { prototype: any } ? Mocked<T["prototype"]> : never;
	} & T;

	/**
	 * Wrap an object or a module with mock definitions
	 *
	 * @example
	 *
	 *  jest.mock("../api");
	 *  import * as api from "../api";
	 *
	 *  const mockApi = api as jest.Mocked<typeof api>;
	 *  api.MyApi.prototype.myApiMethod.mockImplementation(() => "test");
	 */
	type Mocked<T> = {
		[P in keyof T]: T[P] extends (...args: any[]) => any
			? MockInstance<ReturnType<T[P]>, ArgsType<T[P]>>
			: T[P] extends Constructable
				? MockedClass<T[P]>
				: T[P];
	} & T;

	interface MockInstance<T, Y extends any[]> {
		/** Returns the mock name string set by calling `mockFn.mockName(value)`. */
		getMockName(this: void): string;
		/** Provides access to the mock's metadata */
		mock: MockContext<T, Y>;
		/**
		 * Resets all information stored in the mockFn.mock.calls and mockFn.mock.instances arrays.
		 *
		 * Often this is useful when you want to clean up a mock's usage data between two assertions.
		 *
		 * Beware that `mockClear` will replace `mockFn.mock`, not just `mockFn.mock.calls` and `mockFn.mock.instances`.
		 * You should therefore avoid assigning mockFn.mock to other variables, temporary or not, to make sure you
		 * don't access stale data.
		 */
		mockClear(this: void): this;
		/**
		 * Resets all information stored in the mock, including any initial implementation and mock name given.
		 *
		 * This is useful when you want to completely restore a mock back to its initial state.
		 *
		 * Beware that `mockReset` will replace `mockFn.mock`, not just `mockFn.mock.calls` and `mockFn.mock.instances`.
		 * You should therefore avoid assigning mockFn.mock to other variables, temporary or not, to make sure you
		 * don't access stale data.
		 */
		mockReset(this: void): this;
		/**
		 * Does everything that `mockFn.mockReset()` does, and also restores the original (non-mocked) implementation.
		 *
		 * This is useful when you want to mock functions in certain test cases and restore the original implementation in others.
		 *
		 * Beware that `mockFn.mockRestore` only works when mock was created with `jest.spyOn`. Thus you have to take care of restoration
		 * yourself when manually assigning `jest.fn()`.
		 *
		 * The [`restoreMocks`](https://jestjs.io/docs/en/configuration.html#restoremocks-boolean) configuration option is available
		 * to restore mocks automatically between tests.
		 */
		mockRestore(this: void): void;
		/**
		 * Returns the function that was set as the implementation of the mock (using mockImplementation).
		 */
		getMockImplementation(this: void): ((...args: Y) => T) | undefined;
		/**
		 * Accepts a function that should be used as the implementation of the mock. The mock itself will still record
		 * all calls that go into and instances that come from itself – the only difference is that the implementation
		 * will also be executed when the mock is called.
		 *
		 * Note: `jest.fn(implementation)` is a shorthand for `jest.fn().mockImplementation(implementation)`.
		 */
		mockImplementation(this: void, fn?: (...args: Y) => T): this;
		/**
		 * Accepts a function that will be used as an implementation of the mock for one call to the mocked function.
		 * Can be chained so that multiple function calls produce different results.
		 *
		 * @example
		 *
		 * const myMockFn = jest
		 *   .fn()
		 *    .mockImplementationOnce(cb => cb(null, true))
		 *    .mockImplementationOnce(cb => cb(null, false));
		 *
		 * myMockFn((err, val) => console.log(val)); // true
		 *
		 * myMockFn((err, val) => console.log(val)); // false
		 */
		mockImplementationOnce(this: void, fn: (...args: Y) => T): this;
		/** Sets the name of the mock`. */
		mockName(this: void, name: string): this;
		/**
		 * Just a simple sugar function for:
		 *
		 * @example
		 *
		 *   jest.fn(function() {
		 *     return this;
		 *   });
		 */
		mockReturnThis(this: void): this;
		/**
		 * Accepts a value that will be returned whenever the mock function is called.
		 *
		 * @example
		 *
		 * const mock = jest.fn();
		 * mock.mockReturnValue(42);
		 * mock(); // 42
		 * mock.mockReturnValue(43);
		 * mock(); // 43
		 */
		mockReturnValue(this: void, value: T): this;
		/**
		 * Accepts a value that will be returned for one call to the mock function. Can be chained so that
		 * successive calls to the mock function return different values. When there are no more
		 * `mockReturnValueOnce` values to use, calls will return a value specified by `mockReturnValue`.
		 *
		 * @example
		 *
		 * const myMockFn = jest.fn()
		 *   .mockReturnValue('default')
		 *   .mockReturnValueOnce('first call')
		 *   .mockReturnValueOnce('second call');
		 *
		 * // 'first call', 'second call', 'default', 'default'
		 * console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
		 *
		 */
		mockReturnValueOnce(this: void, value: T): this;
		/**
		 * Simple sugar function for: `jest.fn().mockImplementation(() => Promise.resolve(value));`
		 */
		mockResolvedValue(this: void, value: ResolvedValue<T>): this;
		/**
		 * Simple sugar function for: `jest.fn().mockImplementationOnce(() => Promise.resolve(value));`
		 *
		 * @example
		 *
		 * test('async test', async () => {
		 *  const asyncMock = jest
		 *    .fn()
		 *    .mockResolvedValue('default')
		 *    .mockResolvedValueOnce('first call')
		 *    .mockResolvedValueOnce('second call');
		 *
		 *  await asyncMock(); // first call
		 *  await asyncMock(); // second call
		 *  await asyncMock(); // default
		 *  await asyncMock(); // default
		 * });
		 *
		 */
		mockResolvedValueOnce(this: void, value: ResolvedValue<T>): this;
		/**
		 * Simple sugar function for: `jest.fn().mockImplementation(() => Promise.reject(value));`
		 *
		 * @example
		 *
		 * test('async test', async () => {
		 *   const asyncMock = jest.fn().mockRejectedValue(new Error('Async error'));
		 *
		 *   await asyncMock(); // throws "Async error"
		 * });
		 */
		mockRejectedValue(this: void, value: RejectedValue<T>): this;

		/**
		 * Simple sugar function for: `jest.fn().mockImplementationOnce(() => Promise.reject(value));`
		 *
		 * @example
		 *
		 * test('async test', async () => {
		 *  const asyncMock = jest
		 *    .fn()
		 *    .mockResolvedValueOnce('first call')
		 *    .mockRejectedValueOnce(new Error('Async error'));
		 *
		 *  await asyncMock(); // first call
		 *  await asyncMock(); // throws "Async error"
		 * });
		 *
		 */
		mockRejectedValueOnce(this: void, value: RejectedValue<T>): this;
	}

	/**
	 * Represents the result of a single call to a mock function with a return value.
	 */
	interface MockResultReturn<T> {
		type: "return";
		value: T;
	}
	/**
	 * Represents the result of a single incomplete call to a mock function.
	 */
	interface MockResultIncomplete {
		type: "incomplete";
		value: undefined;
	}
	/**
	 * Represents the result of a single call to a mock function with a thrown error.
	 */
	interface MockResultThrow {
		type: "throw";
		value: any;
	}

	type MockResult<T> = MockResultReturn<T> | MockResultThrow | MockResultIncomplete;

	interface MockContext<T, Y extends any[]> {
		lastCall: Y;
		calls: Y[];
		instances: T[];
		invocationCallOrder: number[];
		/**
		 * List of results of calls to the mock function.
		 */
		results: Array<MockResult<T>>;
	}
}
