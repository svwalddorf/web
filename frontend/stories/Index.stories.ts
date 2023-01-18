import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import IndexPage from "../pages";
import { defaultGraph } from "../lib/graphql/mock/graph";

const meta: Meta<typeof IndexPage> = {
  title: "Pages",
  component: IndexPage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof IndexPage>;

// More on interaction testing: https://storybook.js.org/docs/7.0/react/writing-tests/interaction-testing
export const Index: Story = {
  args: { global: defaultGraph.global?.data?.attributes },
};
