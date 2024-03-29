import { createGlobalStyle } from "styled-components"

const CommonStyle = createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  height: 100%;
  font-size: 62.5%;
}

body {
  font-family: Segoe UI, Yu Gothic Medium, Lato !important;
  font-size: 1.6rem;
  font-display: swap;
}

p,
a,
button,
.header,
.button {
  font-family: Segoe UI, Yu Gothic Medium, Lato !important;
  font-display: swap;
}

h1,
h2,
h3,
h4,
h5,
h6,
b {
  font-family: Lato, Yu Gothic Medium, Segoe UI !important;
  font-display: swap;
}

h1 {
  font-size: 36px;
}
h2 {
  font-size: 32px;
}
h3 {
  font-size: 28px;
}
h4 {
  font-size: 24px;
}
h5 {
  font-size: 20px;
}
h6 {
  font-size: 16px;
}
p,
a {
  font-size: 14px;
}
small {
  font-size: 12px;
}

a:focus {
  outline: 0;
}

`

export default CommonStyle
