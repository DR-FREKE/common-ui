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
    tldr: "Kicking robots is not wise and could lead to retribution. Regulations take time to implement, even when evidence is clear, and AI can be unpredictable, like a black hole. AI is being developed to reflect our primal drives and social media networks are becoming more connected to us for faster communication",
    start_time: 0,
    has_key_ideas: true,
    key_ideas: ["some key idea"],
  },
};
