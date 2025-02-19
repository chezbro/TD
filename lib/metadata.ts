import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  `https://${process.env.VERCEL_URL}` ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "John Smith",
  handle: "@offshorecoding",
  socialProfiles,
  email: "john@offshorecoding.com",
  website: "https://nextjs.org",
  jobTitle: "Offshore Development Agency Founder",
  company: "Global Dev Solutions",
  availableForWork: true,
  location: {
    city: "Los Angeles",
    media: "/losangeles.jpg",
  },
};

const defaultTitle = `${defaultAuthor.name}'s Blog`;
const defaultDescription = `I'm ${defaultAuthor.name}. Helping companies build amazing products with talented offshore developers 🌎.`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  siteRepo: "https://github.com/yourusername/your-repo",
  newsletterProvider: "mailerlite",
  newsletterUrl: "https://your-newsletter-url.com",
  analyticsProvider: "umami",
  defaultTheme: "system",
  activeAnnouncement: true,
  announcement: {
    buttonText: "Learn More About Offshore Development →",
    link: "https://your-landing-page.com",
  },
  postsPerPage: 10,
  postsOnHomePage: 8,
  projectsOnHomePage: 4,
};

export default siteMetadata;
