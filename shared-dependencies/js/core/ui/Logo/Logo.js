import styled from "styled-components";
import logo from "./logo.png";
import logoJp from "./logo.jp.png";

export const Logo = styled("img")`
  width: 120px;
  height: 120px;
  background-image: url(${logo});
`;

export const LogoJp = styled("img")`
  width: 120px;
  height: 120px;
  background-image: url(${logoJp});
`;

export const SmallLogo = styled("img")`
  width: 50px;
  height: 50px;
  background-image: url(${logo});
`;

export const SmallLogoJp = styled("img")`
  width: 50px;
  height: 50px;
  background-image: url(${logoJp});
`;

export default Logo;
