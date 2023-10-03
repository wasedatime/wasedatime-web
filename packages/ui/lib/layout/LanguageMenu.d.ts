import { ThemeType } from '../constants/type/theme';
interface LanguageMenuProps {
    theme: ThemeType;
    changeLang: (lang: string) => void;
}
export declare const LanguageMenu: ({ theme, changeLang }: LanguageMenuProps) => import("react/jsx-runtime").JSX.Element;
export {};
