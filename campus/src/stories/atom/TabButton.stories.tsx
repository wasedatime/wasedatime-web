import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import { TabButton, TabProps } from "@app/components/atom/TabButton";

export default {
  component: TabButton,
  title: "Tab Button",
} as Meta<TabProps>;

const Template: Story<TabProps> = (args) => <TabButton {...args} />;

export const Selected: Story<TabProps> = Template.bind({});
Selected.args = {
  title: "Waseda",
  selectedValue: "Waseda",
};
