import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu } from "./Menu";

export default {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    children: { control: "string", Description: "Label을 설정" },
  },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Menu",
};

export const Text = Template.bind({});
Text.args = {
  children: "Text",
  type: "text",
};
