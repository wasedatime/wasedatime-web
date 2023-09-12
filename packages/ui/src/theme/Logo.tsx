import logo from "@/assets/logo.svg"
import logoJp from "@/assets/logo-jp.svg"

export const Logo = () => (
  <img
    src={logo}
    alt="WasedaTime English Logo"
    style={{ width: 120, height: 120 }}
  />
)

export const LogoJp = () => (
  <img
    src={logoJp}
    alt="WasedaTime Japanese Logo"
    style={{ width: 120, height: 120 }}
  />
)

export const SmallLogo = () => (
  <img
    src={logo}
    alt="WasedaTime English Small Logo"
    style={{ width: 50, height: 50 }}
  />
)

export const SmallLogoJp = () => (
  <img src={logoJp} style={{ width: 50, height: 50 }} />
)
