import React, { useState, useEffect, createContext } from "react"

type ThemeTypes = "light" | "dark"

const getInitialTheme = (): ThemeTypes => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme")
    if (typeof storedPrefs === "string") {
      return storedPrefs as ThemeTypes
    }
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
    if (userMedia.matches) {
      return "dark"
    }
  }
  // If you want to use dark theme as the default, return 'dark' instead

  return "light"
}

interface ThemeContextInterface {
  theme: ThemeTypes
  setTheme: (theme: ThemeTypes) => void
}

export const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined
)

interface ThemeProviderType {
  initialTheme?: ThemeTypes
  children: React.ReactNode
}

export const ThemeProvider = ({
  initialTheme,
  children,
}: ThemeProviderType) => {
  if (ThemeContext === undefined) {
    throw Error("ThemeContext must be within a provider")
  }

  const [theme, setTheme] = useState<ThemeTypes>(getInitialTheme)

  const rawSetTheme = (rawTheme: ThemeTypes) => {
    const root = window.document.documentElement
    const isDark = rawTheme === "dark"
    const themeChangedEvent = new Event("themeChanged")
    root.classList.remove(isDark ? "light" : "dark")
    root.classList.add(rawTheme)
    localStorage.setItem("color-theme", rawTheme)
    window.dispatchEvent(themeChangedEvent)
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  const value: ThemeContextInterface = {
    setTheme,
    theme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
