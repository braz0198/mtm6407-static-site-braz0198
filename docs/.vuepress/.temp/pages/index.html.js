export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-CA\",\"frontmatter\":{\"home\":true,\"heroText\":\"Hi, Welcome to my Static Site\",\"heroImage\":\"images/Headshot.jpg\",\"tagline\":\"This is my assignment for my Web Development 4 class it's a static site generator using vueexpress and markdown files to produce what you see here!\",\"actions\":[{\"text\":\"About Me\",\"link\":\"/about/\",\"type\":\"primary\"},{\"text\":\"Contact\",\"link\":\"/contact/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Hobby 1\",\"details\":\"Skateboarding\"},{\"title\":\"Hobby 2\",\"details\":\"Photography\"},{\"title\":\"Hobby 3\",\"details\":\"Fixed Gear Biking\"}],\"footer\":\"Copyright 2023 Brazeau Designs\"},\"headers\":[],\"git\":{\"updatedTime\":1702870733000,\"contributors\":[{\"name\":\"Jackson Brazeau\",\"email\":\"braz0198@algonquinlive.com\",\"commits\":1}]},\"filePathRelative\":\"index.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
