import React from "react";

import {
  TabButton,
  TabSizeDaisy,
  TabTypeDaisy,
} from "@app/components/atom/TabButton";

interface TabListProps {
  tabNames: Array<string>;
  tabType?: TabTypeDaisy;
  tabSize?: TabSizeDaisy;
  selectedTab: string;
  onClickTab: (tabName: string) => void;
}

export const TabList = ({
  tabNames,
  selectedTab,
  onClickTab,
  tabType,
  tabSize,
}: TabListProps) => {
  return (
    <div className="tabs">
      {tabNames.map((tabName) => (
        <TabButton
          title={tabName}
          tabType={tabType}
          tabSize={tabSize}
          selectedValue={selectedTab}
          onClick={() => onClickTab(tabName)}
        />
      ))}
    </div>
  );
};
