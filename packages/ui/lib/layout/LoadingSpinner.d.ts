import React from "react";
type ThemeTypes = "light" | "dark";
type Props = {
    message: string;
    theme: ThemeTypes;
};
type State = {
    delayMessage: string;
};
export declare class LoadingSpinner extends React.Component<Props, State> {
    _isMounted: boolean;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
