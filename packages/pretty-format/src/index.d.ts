import { NewPlugin, Options, OptionsReceived } from "./types";

export type {
	Colors,
	CompareKeys,
	Config,
	Options,
	OptionsReceived,
	OldPlugin,
	NewPlugin,
	Plugin,
	Plugins,
	PrettyFormatOptions,
	Printer,
	Refs,
	Theme,
} from "./types";

export const DEFAULT_OPTIONS: Options;

/**
 * Returns a presentation string of your `val` object
 * @param val any potential JavaScript object
 * @param options Custom settings
 */
export function format(val: unknown, options?: OptionsReceived): string;

export const plugins: {
	AsymmetricMatcher: NewPlugin;
	ConvertAnsi: NewPlugin;
	DOMCollection: NewPlugin;
	DOMElement: NewPlugin;
	Immutable: NewPlugin;
	ReactElement: NewPlugin;
	ReactTestComponent: NewPlugin;
};

export default format;
