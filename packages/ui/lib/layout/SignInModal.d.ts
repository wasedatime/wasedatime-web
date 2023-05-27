/// <reference types="react" />
import { WithTranslation } from "react-i18next";
declare const _default: import("react").ComponentType<Omit<{
    isModalOpen: boolean;
    closeModal: () => void;
    t: import("i18next").TFunction<"translation", undefined, "translation">;
    tReady: boolean;
}, keyof WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
export default _default;
