import React, { ReactNode } from "react";

import { sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { useMediaQuery } from "react-responsive";

interface FrameProps {
  primary: ReactNode;
  secondary?: ReactNode;
  tertiary?: ReactNode;
}

export const Frame = ({ primary, secondary, tertiary }: FrameProps) => {
  // conditions based on media
  const isDesktop = useMediaQuery({ minWidth: sizes.desktop });
  const isTablet = useMediaQuery({
    minWidth: sizes.tablet,
    maxWidth: sizes.desktop,
  });
  const isMobile = useMediaQuery({ maxWidth: sizes.tablet });

  // condition on whether extra content exists
  const hasSecondary = !!secondary;
  const hasTertiary = !!tertiary;

  // div components
  const mainFrame = (children: ReactNode) => (
    <div
      id="frame"
      className="flex flex-row justify-center"
      style={{ marginTop: "67px" }}
    >
      {children}
    </div>
  );
  const mainContent = (width: string) => (
    <div id="main-content" style={{ width }}>
      {primary}
    </div>
  );
  const secondaryContent = (width: string) => (
    <div id="right-content" style={{ width }}>
      {secondary}
    </div>
  );
  const tertiaryContent = (width: string) => (
    <div id="left-content" style={{ width }}>
      {tertiary}
    </div>
  );

  if (isMobile) {
    return mainFrame(mainContent("100%"));
  }
  if (isDesktop && hasTertiary && hasSecondary) {
    return mainFrame(
      <>
        {tertiaryContent("20%")}
        {mainContent("60%")}
        {secondaryContent("20%")}
      </>
    );
  }
  if (!hasTertiary && !isMobile && hasSecondary) {
    return mainFrame(
      <>
        {mainContent("70%")}
        {secondaryContent("30%")}
      </>
    );
  }

  return mainFrame(mainContent(isTablet ? "75%" : "70%"));
};
