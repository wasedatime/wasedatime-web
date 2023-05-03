export const SCREEN_TYPE = ["desktop", "tablet", "phone", "phoneMini"] as const

export type ScreenType = (typeof SCREEN_TYPE)[number]

export const isScreenType = (key: string): key is ScreenType =>
  SCREEN_TYPE.includes(key as ScreenType)
