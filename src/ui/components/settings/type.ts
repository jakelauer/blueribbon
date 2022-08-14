// ----------------------------------------------------------------------

type ColorVariants = {
	name: string;
	lighter: string;
	light: string;
	main: string;
	dark: string;
	darker: string;
	contrastText: string;
};

export type ThemeMode = "light" | "dark";
export type ThemeDirection = "rtl" | "ltr";
export type ThemeContrast = "default" | "bold";
export type ThemeLayout = "vertical" | "horizontal";
export type ThemeColorPresets = "default" | "purple" | "cyan" | "blue" | "orange" | "red";
export type ThemeStretch = boolean;

export type SettingsValueProps = {
	themeMode: ThemeMode;
	themeLayout: ThemeLayout;
	themeStretch: ThemeStretch;
	themeContrast: ThemeContrast;
	themeDirection: ThemeDirection;
	themeColorPresets: ThemeColorPresets;
};

export type SettingsContextProps = {
	themeMode: ThemeMode;
	themeLayout: ThemeLayout;
	themeContrast: ThemeContrast;
	themeDirection: ThemeDirection;
	themeColorPresets: ThemeColorPresets;
	themeStretch: boolean;
	setColor: ColorVariants;
	colorOption: {
		name: string;
		value: string;
	}[];

	// Mode
	onToggleMode: () => void;
	onChangeMode: (event: React.ChangeEvent<HTMLInputElement>) => void;

	// Direction
	onToggleDirection: () => void;
	onChangeDirection: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onChangeDirectionByLang: (lang: string) => void;

	// Layout
	onToggleLayout: () => void;
	onChangeLayout: (event: React.ChangeEvent<HTMLInputElement>) => void;

	// Contrast
	onToggleContrast: () => void;
	onChangeContrast: (event: React.ChangeEvent<HTMLInputElement>) => void;

	// Color
	onChangeColor: (event: React.ChangeEvent<HTMLInputElement>) => void;

	// Stretch
	onToggleStretch: () => void;

	// Reset
	onResetSetting: () => void;
};
