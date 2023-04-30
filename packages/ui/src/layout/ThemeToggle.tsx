import colors from "@/theme/colors.json"
import { Sun, Moon } from "lucide-react"
import { ThemeType } from "@/constants/type/theme"

interface ThemeToggleProps {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

export const ThemeToggle = ({ theme, setTheme }: ThemeToggleProps) => {
  const themeIcons = {
    light: <Sun color={colors.icon.sun} />,
    dark: <Moon color={colors.icon.moon} />,
  }

  return (
    <div
      className="cursor-pointer transition duration-500 ease-in-out p-2 text-center flex items-center justify-center text-icon-sun dark:text-icon-moon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {themeIcons[theme]}
    </div>
  )
}
