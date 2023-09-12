import React from "react"

import { Colors } from "wasedatime-ui"
import Placeholder from "semantic-ui-react/dist/commonjs/elements/Placeholder"

type Props = {
  $isDark: boolean
}

const LoadingTextPlaceHolder = ({ $isDark }: Props) => (
  <Placeholder
    style={{
      backgroundColor: $isDark ? Colors.dark.text3 : Colors.light.text3,
      margin: "1rem",
    }}
  >
    <Placeholder.Paragraph>
      <Placeholder.Line
        style={{
          backgroundColor: $isDark ? Colors.dark.bgMain : Colors.light.bgMain,
        }}
      />
      <Placeholder.Line
        style={{
          backgroundColor: $isDark ? Colors.dark.bgMain : Colors.light.bgMain,
        }}
      />
      <Placeholder.Line
        style={{
          backgroundColor: $isDark ? Colors.dark.bgMain : Colors.light.bgMain,
        }}
      />
      <Placeholder.Line
        style={{
          backgroundColor: $isDark ? Colors.dark.bgMain : Colors.light.bgMain,
        }}
      />
    </Placeholder.Paragraph>
  </Placeholder>
)

export default LoadingTextPlaceHolder
