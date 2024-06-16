import type { Meta, StoryObj } from "@storybook/react";

import Search from "./Search";

const meta: Meta<typeof Search> = {
  title: "Molecules/Search",
  component: Search,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Primary: Story = {
  args: {
    // primary: true,
    // title: "Button",
    // placeholder:"asdasd"
    // styleName: "large",
  },
};
