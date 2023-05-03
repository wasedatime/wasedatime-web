import { ScreenType } from "@/constants/type/screen"
import { css } from "styled-components"

export const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 480,
  phoneMini: 375,
}

export const media = (screen: ScreenType, styles: TemplateStringsArray) => {
  return `
      @media screen and (max-width: ${sizes[screen] / 16}em) {
        ${css(styles)};
      }
    `
}
