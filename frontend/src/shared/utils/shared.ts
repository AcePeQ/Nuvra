export const NAVIGATION_LINKS = [
  {
    label: "On Sale",
    href: "/on-sale",
    end: true,
  },
  {
    label: "New Arrivals",
    href: "/new-arrivals",
    end: true,
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
      href: "/shop?=casual",
    },
    {
      label: "Formal",
      href: "/shop?=formal",
    },
    {
      label: "Party",
      href: "/shop?=party",
    },
    {
      label: "Gym",
      href: "/shop?=gym",
    },
  ],
};
