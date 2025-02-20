import { ContentNavItem, NavItem } from "@/types";

import siteMetadata, { defaultAuthor } from "@/lib/metadata";

const content: ContentNavItem[] = [
  {
    title: "Blog",
    href: "/posts",
    description: "Articles about AI and chat technology",
  },
  {
    title: "Documentation",
    href: "/docs",
    description: "Learn how to use and integrate our chat solutions",
  },
  {
    title: "Pricing",
    href: "/pricing",
    description: "View our pricing plans and features",
  },
  {
    title: "Demo",
    href: "/demo",
    description: "Try out our AI chat capabilities",
  },
  {
    title: "Enterprise",
    href: "/enterprise",
    description: "Custom AI solutions for businesses",
  },
];

export const navigationLinks: NavItem[] = [
  {
    title: "Solutions",
    content,
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
