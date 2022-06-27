// config
import { cookiesKey, defaultSettings } from '../../config';

// ----------------------------------------------------------------------

export const getSettings = (cookies: any) => {
	if(!cookies || !cookiesKey)
	{
		return defaultSettings;
	}

	const themeMode =
		getData(cookies[cookiesKey.themeMode]) || defaultSettings.themeMode;

	const themeDirection =
		getData(cookies[cookiesKey.themeDirection]) ||
		defaultSettings.themeDirection;

	const themeColorPresets =
		getData(cookies[cookiesKey.themeColorPresets]) ||
		defaultSettings.themeColorPresets;

	const themeLayout =
		getData(cookies[cookiesKey.themeLayout]) || defaultSettings.themeLayout;

	const themeContrast =
		getData(cookies[cookiesKey.themeContrast]) || defaultSettings.themeContrast;

	const themeStretch =
		getData(cookies[cookiesKey.themeStretch]) || defaultSettings.themeStretch;

	return {
		themeMode,
		themeLayout,
		themeStretch,
		themeContrast,
		themeDirection,
		themeColorPresets,
	};
};

// ----------------------------------------------------------------------

const getData = (value: string) => {
	if (value === `true` || value === `false`) {
		return JSON.parse(value);
	}
	if (value === `undefined` || !value) {
		return ``;
	}
	return value;
};
