import type { Meta, StoryObj } from "@storybook/react";
import cartImg from "../../assets/images/cart.svg";
import minusImg from "../../assets/images/minus.svg";
import plusImg from "../../assets/images/plus.svg";
import ButtonAction from "./ButtonAction";

const meta: Meta<typeof ButtonAction> = {
  title: "Atoms/ButtonAction  ",
  component: ButtonAction,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;
type Story = StoryObj<typeof ButtonAction>;

export const Cart: Story = {
  args: {
    img: cartImg,
    type: "add to cart",
    // primary: true,
    // title: "Button",
    // styleName: "large",
  },
};
export const Minus: Story = {
  args: {
    img: minusImg,
    type: "add to cart",
    // primary: true,
    // title: "Button",
    // styleName: "large",
  },
};
export const Plus: Story = {
  args: {
    img: plusImg,
    type: "add to cart",
    // primary: true,
    // title: "Button",
    // styleName: "large",
  },
};
