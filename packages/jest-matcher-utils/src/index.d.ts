import { CompareKeys } from "@rbxts/pretty-format";

type MatcherHintColor = (arg: string) => string; // subset of Chalk type

export type MatcherHintOptions = {
	comment?: string;
	expectedColor?: MatcherHintColor;
	isDirectExpectCall?: boolean;
	isNot?: boolean;
	promise?: string;
	receivedColor?: MatcherHintColor;
	secondArgument?: string;
	secondArgumentColor?: MatcherHintColor;
};

export type DiffOptionsColor = (arg: string) => string; // subset of Chalk type

export type DiffOptions = {
	aAnnotation?: string;
	aColor?: DiffOptionsColor;
	aIndicator?: string;
	bAnnotation?: string;
	bColor?: DiffOptionsColor;
	bIndicator?: string;
	changeColor?: DiffOptionsColor;
	changeLineTrailingSpaceColor?: DiffOptionsColor;
	commonColor?: DiffOptionsColor;
	commonIndicator?: string;
	commonLineTrailingSpaceColor?: DiffOptionsColor;
	contextLines?: number;
	emptyFirstOrLastLinePlaceholder?: string;
	expand?: boolean;
	includeChangeCounts?: boolean;
	omitAnnotationLines?: boolean;
	patchColor?: DiffOptionsColor;
	compareKeys?: CompareKeys;
};

export const EXPECTED_COLOR: string;
export const RECEIVED_COLOR: string;
export const INVERTED_COLOR: string;
export const BOLD_WEIGHT: string;
export const DIM_COLOR: string;

export const SUGGEST_TO_CONTAIN_EQUAL: string;

export function stringify(object: unknown, maxDepth?: number): string;

export function highlightTrailingWhitespace(text: string): string;

export function printReceived(object: unknown): string;

export function printExpected(value: unknown): string;

export function printWithType(name: string, value: unknown, print: (value: unknown) => string): string;

export function ensureNoExpected(expected: unknown, matcherName: string, options?: MatcherHintOptions): void;

/**
 * Ensures that `actual` is of type `number | bigint`
 */
export function ensureActualIsNumber(actual: unknown, matcherName: string, options?: MatcherHintOptions): void;

/**
 * Ensures that `expected` is of type `number | bigint`
 */
export function ensureExpectedIsNumber(expected: unknown, matcherName: string, options?: MatcherHintOptions): void;

/**
 * Ensures that `actual` & `expected` are of type `number | bigint`
 */
export function ensureNumbers(
	actual: unknown,
	expected: unknown,
	matcherName: string,
	options?: MatcherHintOptions,
): void;

export function ensureExpectedIsNonNegativeInteger(
	expected: unknown,
	matcherName: string,
	options?: MatcherHintOptions,
): void;

export function diff(a: string, b: string, options?: DiffOptions): string | undefined;

export function pluralize(word: string, count: number): string;

type PrintLabel = (string: string) => string;

export function getLabelPrinter(...strings: Array<string>): PrintLabel;

export function matcherErrorMessage(hint: string, generic: string, specific?: string): string;

export function matcherHint(
	matcherName: string,
	received?: string,
	expected?: string,
	options?: MatcherHintOptions,
): string;
