import type { Meta, StoryObj } from "@storybook/react";
import AdvancedCard from "./index";

const meta: Meta<typeof AdvancedCard> = {
  title: "Components/AdvancedCard",
  component: AdvancedCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AdvancedCard>;

export const Basic: Story = {
  args: {
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=60",
    title: "Wireless Headphones",
    description: "High-quality audio with active noise cancellation.",
    buttonText: "View Product",
    link: "https://example.com",
    price: "$199",
    badge: "Best Seller",
    rating: 5,
  },
};

export const Minimal: Story = {
  args: {
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=60",
    title: "Minimalist Lamp",
    description: "Elegant modern lamp for your workspace.",
    buttonText: "Read More",
    link: "https://example.com",
    rating: 3,
  },
};

export const Discounted: Story = {
  args: {
    image:
      "https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?auto=format&fit=crop&w=800&q=60",
    title: "Fitness Smartwatch",
    description: "Track your health and fitness in real time.",
    buttonText: "Buy Now",
    link: "https://example.com",
    price: "$129",
    badge: "-30% Off",
    rating: 4,
  },
};
