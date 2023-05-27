export declare const SCREEN_TYPE: readonly ["desktop", "tablet", "phone", "phoneMini"];
export type ScreenType = (typeof SCREEN_TYPE)[number];
export declare const isScreenType: (key: string) => key is "desktop" | "tablet" | "phone" | "phoneMini";
