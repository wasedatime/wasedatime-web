export const THEME_TYPE = ["light", "dark"] as const

export type ThemeType = (typeof THEME_TYPE)[number]

export const isThemeType = (key: string): key is ThemeType =>
  THEME_TYPE.includes(key as ThemeType)
