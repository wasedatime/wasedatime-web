/// <reference types="react" />
import { ThemeType } from '../constants/type/theme';
interface ThemeToggleProps {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}
export declare const ThemeToggle: ({ theme, setTheme }: ThemeToggleProps) => JSX.Element;
export {};
