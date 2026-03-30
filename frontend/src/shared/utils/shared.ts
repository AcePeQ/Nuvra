export const NAVIGATION_LINKS = [
  {
    label: "On Sale",
    href: "/shop?feature=Sale",
    end: true,
    param: "Sale",
  },
  {
    label: "New Arrivals",
    href: "/shop?feature=New",
    end: true,
    param: "New",
  },
];

export const DROPDOWN_LINK = {
  label: "Shop",
  href: "/shop",
  end: true,
  isLink: true,
  items: [
    {
      label: "Casual",
      href: "/shop?style=Casual",
    },
    {
      label: "Formal",
      href: "/shop?style=Formal",
    },
    {
      label: "Party",
      href: "/shop?style=Party",
    },
    {
      label: "Gym",
      href: "/shop?style=Gym",
    },
  ],
};
