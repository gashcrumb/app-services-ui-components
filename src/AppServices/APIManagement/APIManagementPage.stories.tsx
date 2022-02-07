import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { APIManagementPage } from "./APIManagementPage";

export default {
  component: APIManagementPage,
  args: {},
} as ComponentMeta<typeof APIManagementPage>;

const Template: ComponentStory<typeof APIManagementPage> = (args) => (
  <APIManagementPage {...args} />
);

export const APIManagement = Template.bind({});
APIManagement.storyName = "APIManagement";