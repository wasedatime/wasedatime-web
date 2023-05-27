/// <reference types="react" />
import { ThemeType } from '../constants/type/theme';
interface LanguageMenuProps {
    theme: ThemeType;
    changeLang: (lang: string) => void;
}
export declare const LanguageMenu: ({ theme, changeLang }: LanguageMenuProps) => JSX.Element;
export {};
