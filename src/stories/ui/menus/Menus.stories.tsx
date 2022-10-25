import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menus } from "./Menus";
import { Menu } from "../../atoms/menu/Menu";

export default {
  title: "Components/Menus",
  component: Menus,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    children: { control: "string", Description: "Label을 설정" },
  },
} as ComponentMeta<typeof Menus>;

const Template: ComponentStory<typeof Menus> = (args) => <Menus {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Menus",
  menus: [<Menu>1</Menu>],
};
