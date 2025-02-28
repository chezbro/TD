// import a pre-defined template for config and content options
export {
  protectedRoutes,
  effects,
  style,
  display,
  mailchimp,
  baseURL,
} from "@/app/resources/config";

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  contact,
} from "@/app/resources/content";

// Define routes directly in this file
export const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": false,
  "/contact": true,
};
