import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EvOC UserDocs",
  description: "User documentation of EvOC",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Framework Walkthrough', link: '/getting_started' }
    ],

    sidebar: [
      {
        text: 'Framework Walkthrough',
        items: [
          { text: 'Getting Started', link: '/getting_started' },
          { text: 'Backend Setup', link: '/backend_setup' },
          { text: 'Frontend Setup', link: '/frontend_setup' },
          { text: 'Register and Login', link: '/Register_and_login' },
          { text: 'EA Runs', link: '/EA_runs' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
