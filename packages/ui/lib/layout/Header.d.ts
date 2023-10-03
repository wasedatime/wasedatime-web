import { ThemeType } from '../constants/type/theme';
type HeaderProps = {
    title: string;
    onInputChange(x: string): void;
    placeholder: string;
    inputText: string | string[];
    disabled?: boolean;
    isBlur: boolean;
    changeLang(x: string): void;
    theme?: ThemeType;
    setTheme: (theme: ThemeType) => void;
};
export declare const Header: ({ title, onInputChange, placeholder, inputText, disabled, isBlur, changeLang, theme, setTheme, }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export {};
