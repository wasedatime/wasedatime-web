import React from "react"
import colors from "@/theme/colors.json"
import { Wrapper } from "@/base/Wrapper"
import { Overlay } from "@/base/Overlay"
import { Logo } from "@/theme/Logo"

const Spin = (
  <style>
    {`
      @keyframes loadingSpinnerSpin {
        from {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(360deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}
  </style>
)

const logoStyle = {
  display: "block",
  width: "100px",
  height: "100px",
  transition: "transform(0, 12vh)",
  animation: "loadingSpinnerSpin 3s linear infinite",
}

type ThemeTypes = "light" | "dark"

type Props = {
  message: string
  theme: ThemeTypes
}

type State = {
  delayMessage: string
}

class LoadingSpinner extends React.Component<Props, State> {
  _isMounted: boolean
  constructor(props: Props) {
    super(props)

    // isMounted pattern to prevent setTimeOut executing after the component unmounts.
    this._isMounted = false

    this.state = {
      delayMessage: "",
    }
  }

  componentDidMount() {
    this._isMounted = true
    this._isMounted &&
      setTimeout(() => {
        this._isMounted &&
          this.setState({
            delayMessage:
              "Slow network is detected. Please wait we're almost done 💪",
          })
      }, 4000)
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    return (
      <Wrapper style={{ flex: "1 0 0" }}>
        <Overlay
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "25px",
          }}
        >
          {Spin}
          <div style={logoStyle}>
            <Logo />
          </div>
          <p
            style={{
              fontSize: "2rem",
              textAlign: "center",
              color:
                this.props.theme === "light"
                  ? colors.light.text2
                  : colors.dark.text2,
            }}
          >
            {this.props.message || "Loading..."}
          </p>
          <p
            style={{
              fontSize: "2rem",
              textAlign: "center",
              color:
                this.props.theme === "light"
                  ? colors.light.text2
                  : colors.dark.text2,
            }}
          >
            {this.state.delayMessage}
          </p>
        </Overlay>
      </Wrapper>
    )
  }
}

export default LoadingSpinner
