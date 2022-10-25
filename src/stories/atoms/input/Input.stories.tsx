import { Input } from "./Input";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    placeholder: { control: "text" },
    type: { control: "text", expanded: true },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  placeholder: "Default",
};

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  placeholder: "Default",
  size: "small",
};

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Large.args = {
  placeholder: "Default",
  size: "large",
};
