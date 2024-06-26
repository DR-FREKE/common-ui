import { Meta, StoryObj } from "@storybook/react";
import { TimestampComp } from "./timestamp";

const meta: Meta<typeof TimestampComp> = {
  component: TimestampComp,
};

export default meta;

type Story = StoryObj<typeof TimestampComp>;

export const Default: Story = {
  args: {
    icon: "🔍",
    tldr: "The begining of everything",
    start_time: 3499,
    key_ideas: ["some key idea"],
  },
};
