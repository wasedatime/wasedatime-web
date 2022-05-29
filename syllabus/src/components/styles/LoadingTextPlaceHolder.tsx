import React from "react";

import colors from "@bit/wasedatime.core.theme.colors";
import Placeholder from "semantic-ui-react/dist/commonjs/elements/Placeholder";

type Props = {
  $isDark: boolean;
};

const LoadingTextPlaceHolder = ({ $isDark }: Props) => (
  <Placeholder
    style={{
      backgroundColor: $isDark ? colors.dark.text3 : colors.light.text3,
      margin: "1rem",
    }}
  >
    <Placeholder.Paragraph>
      <Placeholder.Line
        style={{
          backgroundColor: $isDark ? colors.dark.bgMain : colors.light.bgMain,
        }}
      />
      <Placeholder.Line
        style={{
          backgroundColor: $isDark ? colors.dark.bgMain : colors.light.bgMain,
        }}
      />
      <Placeholder.Line
        style={{
          backgroundColor: $isDark ? colors.dark.bgMain : colors.light.bgMain,
        }}
      />
      <Placeholder.Line
        style={{
          backgroundColor: $isDark ? colors.dark.bgMain : colors.light.bgMain,
        }}
      />
    </Placeholder.Paragraph>
  </Placeholder>
);

export default LoadingTextPlaceHolder;
