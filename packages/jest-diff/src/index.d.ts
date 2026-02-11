import { CompareKeys } from "@rbxts/pretty-format";

// Constants
export const DIFF_DELETE: number;
export const DIFF_EQUAL: number;
export const DIFF_INSERT: number;

// Diff class (tuple-like: [op, text])
export type Diff = [number, string];
export const Diff: new (op: number, text: string) => Diff;

// DiffOptions types
export type DiffOptionsColor = (arg: string) => string;
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

// Functions
export function diff(a: unknown, b: unknown, options?: DiffOptions): string | undefined;
export function diffLinesRaw(aLines: Array<string>, bLines: Array<string>): Array<Diff>;
export function diffLinesUnified(
	aLines: Array<string>,
	bLines: Array<string>,
	options?: DiffOptions,
): string;
export function diffLinesUnified2(
	aDisplay: Array<string>,
	bDisplay: Array<string>,
	aCompare: Array<string>,
	bCompare: Array<string>,
	options?: DiffOptions,
): string;
export function diffStringsRaw(a: string, b: string, cleanup: boolean): Array<Diff>;
export function diffStringsUnified(a: string, b: string, options?: DiffOptions): string;
