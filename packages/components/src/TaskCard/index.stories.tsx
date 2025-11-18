import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TaskCard from "./index";

const meta: Meta<typeof TaskCard> = {
  title: "Components/TaskCard",
  component: TaskCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TaskCard>;

export const Default: Story = {
  args: {
    title: "Fix Authentication Bug",
    description: "Users cannot login when their session expires.",
    tags: ["backend", "auth"],
    priority: "high",
    status: "in-progress",
    dueDate: "Feb 21",
    assignee: "https://randomuser.me/api/portraits/men/75.jpg",
  },
};

export const Todo: Story = {
  args: {
    title: "Design new dashboard layout",
    priority: "medium",
    status: "todo",
  },
};

export const Completed: Story = {
  args: {
    title: "Setup CI/CD Pipeline",
    tags: ["devops"],
    priority: "low",
    status: "done",
    assignee: "https://randomuser.me/api/portraits/women/52.jpg",
  },
};
