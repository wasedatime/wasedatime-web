/// <reference types="react" />
import { ThemeType } from '../constants/type/theme';
interface LoadingSpinnerProps {
    message: string;
    theme: ThemeType;
}
export declare const LoadingSpinner: ({ message, theme }: LoadingSpinnerProps) => JSX.Element;
export {};
