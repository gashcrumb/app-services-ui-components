import { composeStories } from "@storybook/testing-react";
import { render, waitForI18n } from "../../../test-utils";
import * as stories from "./ConsumerGroupTable.stories";
import { userEvent, within } from "@storybook/testing-library";

const { ConsumerGroupTableAtKafkaLevel, ConsumerGroupTableAtTopicLevel } =
  composeStories(stories);

describe("Consumer group table", () => {
  it("Consumer group table at kafka level should have kebab menu", async () => {
    const comp = render(<ConsumerGroupTableAtKafkaLevel />);

    await waitForI18n(comp);

    const firstRow = await comp.getAllByRole("row")[1];

    console.log(firstRow);
    const btnExpand = within(firstRow).getByRole("button");
    userEvent.click(btnExpand);

    expect(await comp.findByText("Delete")).toBeInTheDocument();
    expect(await comp.findByText("View partition offsets")).toBeInTheDocument();
    expect(await comp.findByText("Reset offset")).toBeInTheDocument();
  });

  it("Consumer group table at topic level should not have kebab menu", async () => {
    const comp = render(<ConsumerGroupTableAtTopicLevel />);

    await waitForI18n(comp);

    const firstRow = await comp.getAllByRole("row")[1];

    expect(within(firstRow).queryByRole("button")).not.toBeInTheDocument();
  });
});
