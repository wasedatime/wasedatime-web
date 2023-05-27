import { ScreenType } from "@/constants/type/screen"

export const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 480,
  phoneMini: 375,
}

export const media = (screen: ScreenType, styles: string) => {
  return `
      @media screen and (max-width: ${sizes[screen] / 16}em) {
        ${styles};
      }
    `
}
