import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import NotificationCard from "./index";

const meta: Meta<typeof NotificationCard> = {
  title: "Components/NotificationCard",
  component: NotificationCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NotificationCard>;

export const Default: Story = {
  args: {
    title: "New Comment",
    message: "John commented on your post: “Amazing work!”",
    time: "2 minutes ago",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
};

export const Unread: Story = {
  args: {
    title: "New Follower",
    message: "Sarah started following you.",
    time: "Just now",
    unread: true,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
};

export const WithAction: Story = {
  args: {
    title: "Invite to Project",
    message: "Mike invited you to join the workspace.",
    time: "10 minutes ago",
    actionLabel: "Accept",
    onAction: () => alert("Accepted"),
    unread: true,
  },
};
