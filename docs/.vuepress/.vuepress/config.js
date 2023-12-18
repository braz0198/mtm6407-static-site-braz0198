import { defaultTheme } from "vuepress";

export default {
  lang: "en-CA",
  title: "Hello VuePress",
  description: 'Just playing around',
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
