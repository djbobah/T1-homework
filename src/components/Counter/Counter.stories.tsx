import type { Meta, StoryObj } from "@storybook/react";

import Counter from "./Counter";

const meta: Meta<typeof Counter> = {
  title: "Molecules/Counter",
  component: Counter,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Primary: Story = {
  args: {
    count: 1,
    // primary: true,
    // title: "Button",
    // placeholder:"asdasd"
    // styleName: "large",
  },
};
