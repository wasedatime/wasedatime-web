import { css } from "styled-components"

export const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 480,
  phoneMini: 375,
}

type accProps = {
  [key: string]: (x: TemplateStringsArray) => string[]
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce(
  (acc: accProps, label: string) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(args)};
      }
    `

    return acc
  },
  {}
)
