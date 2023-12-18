import { defineClientConfig } from '@vuepress/client'
import CustomLayout from 'docs/vuepress/vuepress/layouts/CustomLayout.vue'

export default defineClientConfig({
  layouts: {
    CustomLayout,
  },
})