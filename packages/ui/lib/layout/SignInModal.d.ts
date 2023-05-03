/// <reference types="react" />
import { WithTranslation } from "react-i18next";
declare const _default: import("react").ComponentType<Omit<{
    isModalOpen: boolean;
    closeModal: () => void;
    t: TFunction<N, TKPrefix>;
    tReady: boolean;
}, keyof WithTranslation<N_1, undefined>> & import("react-i18next").WithTranslationProps>;
export default _default;
