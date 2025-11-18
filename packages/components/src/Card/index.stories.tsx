import type { Meta, StoryObj } from "@storybook/react";
import Card from "./index";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    image:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=60",
    title: "Beautiful Landscape",
    description: "A breathtaking view of the mountains during sunset.",
    buttonText: "View More",
    link: "https://unsplash.com",
  },
};

export const ProductCard: Story = {
  args: {
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=60",
    title: "Premium Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    buttonText: "Buy Now",
    link: "https://example.com/product",
  },
};
