import React, { useState } from "react";

import { TabSizeDaisy, TabTypeDaisy } from "@app/components/atom/TabButton";
import { TabList } from "@app/components/block/TabList";

interface TabSelectContainerProps {
  contentList: Array<{ title: string; body: React.ReactNode }>;
  tabType?: TabTypeDaisy;
  tabSize?: TabSizeDaisy;
}

export const TabSelectContainer = ({
  contentList,
  tabType,
  tabSize,
}: TabSelectContainerProps) => {
  const [buildingTab, setBuildingTab] = useState<string>("");

  const handleClickBuildingTab = (buildingName: string) => {
    setBuildingTab(buildingName);
  };

  return (
    <React.Fragment>
      <TabList
        tabNames={contentList.map((content) => content.title)}
        selectedTab={buildingTab}
        onClickTab={handleClickBuildingTab}
        tabType={tabType}
        tabSize={tabSize}
      />
      <div>
        {contentList.map(
          (content) => buildingTab === content.title && content.body
        )}
      </div>
    </React.Fragment>
  );
};
