import React from "react";
import colors from "wasedatime-ui/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { THEME } from "@app/types/theme";

interface ThemeToggleProps {
  theme: string;
  setTheme?: (theme: THEME) => void;
}

export const ThemeToggle = ({ theme, setTheme }: ThemeToggleProps) => {
  return (
    <div className="transition duration-500 ease-in-out p-2 text-center flex items-center justify-center text-icon-sun dark:text-icon-moon">
      <FontAwesomeIcon
        icon={theme === THEME.DARK ? faMoon : faSun}
        size="lg"
        color={theme === THEME.DARK ? colors.icon.moon : colors.icon.sun}
        onClick={() =>
          setTheme && setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK)
        }
      />
    </div>
  );
};
