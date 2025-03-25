import { defineConfig } from "vitepress";

export default defineConfig({
    base: "/user_docs/",
    ignoreDeadLinks: true,
    title: "EvOC Docs",
    description: "Documentation for Evolutionary Algorithms On Click (EvOC)",
    head: [
        ["link", { rel: "shortcut icon", href: "/user_docs/logo.ico" }],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/user_docs/logo.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/user_docs/logo.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/user_docs/logo.png",
            },
        ],
        [
            "link",
            { rel: "mask-icon", href: "/user_docs/logo.png", color: "#3eaf7c" },
        ],
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "mobile-web-app-capable", content: "yes" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        ],
        ["meta", { name: "msapplication-TileColor", content: "#000000" }],
        [
            "meta",
            { name: "msapplication-TileImage", content: "/user_docs/logo.png" },
        ],
        [
            "meta",
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0",
            },
        ],
        [
            "meta",
            {
                name: "description",
                content:
                    "Documentation for Evolutionary Algorithms On Click (EvOC)",
            },
        ],
        ["meta", { property: "og:title", content: "EvOC Docs" }],
        [
            "meta",
            {
                property: "og:description",
                content:
                    "Documentation for Evolutionary Algorithms On Click (EvOC)",
            },
        ],
        ["meta", { property: "og:image", content: "/user_docs/logo.png" }],
        [
            "meta",
            {
                property: "og:url",
                content:
                    "https://evolutionary-algorithms-on-click.github.io/user_docs/",
            },
        ],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:site_name", content: "EvOC Docs" }],
        ["meta", { property: "og:locale", content: "en_US" }],
        ["meta", { name: "twitter:card", content: "summary" }],
        ["meta", { name: "twitter:title", content: "EvOC Docs" }],
        [
            "meta",
            {
                name: "twitter:description",
                content:
                    "Documentation for Evolutionary Algorithms On Click (EvOC)",
            },
        ],
        ["meta", { name: "twitter:image", content: "/user_docs/logo.png" }],
    ],
    themeConfig: {
        logo: "/user_docs/logo.png",
        logoLink: "/",
        repo: "Evolutionary-Algorithms-On-Click/user_docs",
        search: {
            provider: "local",
            placeholder: "Search",
        },
        nav: [
            { text: "Home", link: "/" },
            { text: "Get Started", link: "/get-started" },
            {
                text: "Examples",
                items: [
                    { text: "EA Run", link: "/ea-run" },
                    { text: "GP Run", link: "/gp-run" },
                    { text: "PSO Run", link: "/pso-run" },
                    { text: "DE Run", link: "/de-run" },
                    { text: "Optimize ML Run", link: "/ml-run" },
                ],
            },
        ],

        sidebar: [
            {
                text: "Getting Started",
                collapsed: false,
                items: [
                    { text: "Setup Environment", link: "/get-started" },
                    { text: "Backend Setup", link: "/backend-setup" },
                    { text: "Frontend Setup", link: "/frontend-setup" },
                ],
            },
            {
                text: "User Guide",
                collapsed: false,
                items: [
                    { text: "Register and Login", link: "/auth" },
                    {
                        text: "Examples",
                        collapsed: false,
                        items: [
                            { text: "EA Run", link: "/ea-run" },
                            { text: "GP Run", link: "/gp-run" },
                            { text: "PSO Run", link: "/pso-run" },
                            { text: "DE Run", link: "/de-run" },
                            { text: "Optimize ML Run", link: "/ml-run" },
                        ],
                    },
                ],
            },
        ],

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/Evolutionary-Algorithms-On-Click",
            },
        ],

        footer: {
            message: "Released under the GPL 3.0 License.",
        },
    },
});
