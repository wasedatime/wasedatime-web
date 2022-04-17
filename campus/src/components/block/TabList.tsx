import React from "react";

import { TabButton } from "@app/components/atom/TabButton";

export interface TabListProps {
  tabNames: Array<string>;
  selectedTab: string;
  onClickTab: (tabName: string) => void;
}

export const TabList = ({
  tabNames,
  selectedTab,
  onClickTab,
}: TabListProps) => {
  return (
    <div className="tabs">
      {tabNames.map((tabName) => (
        <TabButton
          title={tabName}
          selectedValue={selectedTab}
          onClick={() => onClickTab(tabName)}
        />
      ))}
    </div>
  );
};
