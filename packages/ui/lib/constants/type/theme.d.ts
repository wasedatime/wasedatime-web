export declare const THEME_TYPE: readonly ["light", "dark"];
export type ThemeType = (typeof THEME_TYPE)[number];
export declare const isThemeType: (key: string) => key is "light" | "dark";
