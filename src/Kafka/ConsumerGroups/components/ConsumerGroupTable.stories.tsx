import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ConsumerGroupTable } from "./ConsumerGroupTable";
import { ConsumerGroup } from "../types";

const ConsumerGroupTableValue: ConsumerGroup[] = [
  {
    consumerGroupId: "console-consumer-233",
    consumers: [
      {
        groupId: "1",
        topic: "test-topic",
        partition: 0,
        offset: 4,
        logEndOffset: 1,
        lag: 1,
        memberId: "123456789",
      },
      {
        groupId: "2",
        topic: "test-topic",
        partition: 1,
        offset: 3,
        logEndOffset: 1,
        lag: 0,
      },
    ],
    state: "CompletingRebalance",
  },
  {
    consumerGroupId: "console-consumer-233",
    consumers: [
      {
        groupId: "2",
        topic: "test-topic-2",
        partition: 2,
        offset: 3,
        logEndOffset: 1,
        lag: 0,
      },
    ],
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
