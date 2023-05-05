import { useState, useEffect } from "react"
import colors from "@/theme/colors.json"
import { Wrapper } from "@/base/Wrapper"
import { Overlay } from "@/base/Overlay"
import { Logo } from "@/theme/Logo"
import { ThemeType } from "@/constants/type/theme"

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

interface LoadingSpinnerProps {
  message: string
  theme: ThemeType
}

export const LoadingSpinner = ({ message, theme }: LoadingSpinnerProps) => {
  const [delayMessage, setDelayMessage] = useState<string>("")

  useEffect(() => {
    setTimeout(() => {
      setDelayMessage(
        "Slow network is detected. Please wait we're almost done 💪"
      )
    }, 4000)
  })

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
            color: theme === "light" ? colors.light.text2 : colors.dark.text2,
          }}
        >
          {message || "Loading..."}
        </p>
        <p
          style={{
            fontSize: "2rem",
            textAlign: "center",
            color: theme === "light" ? colors.light.text2 : colors.dark.text2,
          }}
        >
          {delayMessage}
        </p>
      </Overlay>
    </Wrapper>
  )
}
