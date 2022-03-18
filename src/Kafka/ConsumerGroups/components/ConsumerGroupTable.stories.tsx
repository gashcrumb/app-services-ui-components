import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ConsumerGroupTable } from "./ConsumerGroupTable";
import { ConsumerGroup } from "../types";

const ConsumerGroupTableValue: ConsumerGroup[] = [
  {
    consumerGroupId: "console-consumer-233",
    activeMembers: 1,
    partitionsWithLag: 2,
    state: "CompletingRebalance",
  },
  {
    consumerGroupId: "console-consumer-233",
    activeMembers: 2,
    partitionsWithLag: 2,
    state: "Stable",
  },
];

export default {
  component: ConsumerGroupTable,
  args: {},
} as ComponentMeta<typeof ConsumerGroupTable>;

const Template: ComponentStory<typeof ConsumerGroupTable> = (args) => (
  <ConsumerGroupTable {...args} />
);

export const ConsumersGroupTable = Template.bind({});
ConsumersGroupTable.args = {
  consumerGroup: ConsumerGroupTableValue,
};
