import { defaultTheme } from "vuepress";

export default {
  lang: "en-CA",
  title: "My Hobbies",
  theme: defaultTheme({
    // default theme config
    navbar: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "About",
        link: "/about",
      },
      {
        text: "Contact",
        link: "/contact.md",
      },
    ],
  }),
  base: "/mtm6407-static-site-braz0198/",
};
