import React, { useState } from "react";

import { TabList } from "@app/components/block/TabList";

interface TabSelectContainerProps {
  contentList: Array<{ title: string; body: React.ReactNode }>;
}

export const TabSelectContainer = ({
  contentList,
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
      />
      <div>
        {contentList.map(
          (content) => buildingTab === content.title && content.body
        )}
      </div>
    </React.Fragment>
  );
};
