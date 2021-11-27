import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchBar from "./SearchBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/SearchBar",
  component: SearchBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SearchBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  placeholder: "Search",
};

export const Secondary = Template.bind({});
Secondary.args = {
  placeholder: "Search",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  placeholder: "Search",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  placeholder: "Search",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  placeholder: "Search",
};

export const Left = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Left.args = {
  placeholder: "Search",
  text: "start",
};
