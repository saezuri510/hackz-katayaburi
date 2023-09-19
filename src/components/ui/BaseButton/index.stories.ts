import { Meta, StoryObj } from "@storybook/react";

import { BaseButton } from ".";

type Story = StoryObj<typeof BaseButton>;

const meta: Meta<typeof BaseButton> = {
  args: {
    children: "ボタン",
  },
  argTypes: {
    className: { control: { type: "text" } },
  },
  component: BaseButton,
  tags: ["autodocs"],
  title: "UI/BaseButton",
};

export const _Button: Story = {};

export default meta;
