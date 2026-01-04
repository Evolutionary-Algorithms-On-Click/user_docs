import { defineConfig } from "vitepress";
import path from "path";
import fs from "fs";
import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import dotenv from "dotenv";
import { globSync } from "glob";

dotenv.config();

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
        logo: "/logo.png",
        logoLink: "/user_docs",
        repo: "Evolutionary-Algorithms-On-Click/user_docs",
        search: {
            provider: "local",
            placeholder: "Search",
        },
        nav: [
            { text: "Home", link: "/" },
            { text: "Get Started", link: "/introduction" },
            {
                text: "Examples",
                items: [
                    { text: "EA Run", link: "/user-guide/ea-run" },
                    { text: "GP Run", link: "/user-guide/gp-run" },
                    { text: "PSO Run", link: "/user-guide/pso-run" },
                    { text: "DE Run", link: "/user-guide/de-run" },
                    { text: "Optimize ML Run", link: "/user-guide/ml-run" },
                ],
            },
            { text: "Team", link: "/team" },
        ],

        sidebar: [
            {
                text: "Get Started",
                collapsed: false,
                items: [{ text: "Introduction", link: "/introduction" }],
            },
            {
                text: "Installation",
                collapsed: false,
                items: [
                    { text: "Pre-requisites", link: "/install/env-setup" },
                    { text: "Install", link: "/install/install" },
                ],
            },
            {
                text: "User Guide",
                collapsed: false,
                items: [
                    { text: "Register and Login", link: "/user-guide/auth" },
                    {
                        text: "Examples",
                        collapsed: false,
                        items: [
                            { text: "EA Run", link: "/user-guide/ea-run" },
                            { text: "GP Run", link: "/user-guide/gp-run" },
                            { text: "PSO Run", link: "/user-guide/pso-run" },
                            { text: "DE Run", link: "/user-guide/de-run" },
                            {
                                text: "Optimize ML Run",
                                link: "/user-guide/ml-run",
                            },
                        ],
                    },
                ],
            },
            {
                text: "FAQs",
                collapsed: false,
                items: [{ text: "Common Problems", link: "/FAQ" }],
            },
            {
                text: "Team",
                collapsed: false,
                items: [{ text: "The Team", link: "/team" }],
            },
        ],

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/Evolutionary-Algorithms-On-Click",
            },
        ],

        footer: {
            message: "Released under the GPL 3.0 License as of 2025.",
        },
    },
    vite: {
        resolve: {
            alias: {
                "zod/v3": "zod",
                "zod/v4": "zod",
            },
        },
        plugins: [
            {
name: "handle-chat-api",
configureServer(server) {
                    server.middlewares.use(async (req, res, next) => {
                        if (req.url === "/api/chat" && req.method === "POST") {
                            let body = "";
         req.on("data", (chunk) => {
                                body += chunk.toString();
                            });
     req.on("end", async () => {
                                try {
                                    const { messages } = JSON.parse(body);
                                    if (
            !process.env
                                            .GOOGLE_GENERATIVE_AI_API_KEY
                                    ) {
                                        throw new Error(
                                            "Missing GOOGLE_GENERATIVE_AI_API_KEY in .env file",
         );
                                    }

             const docsPath = path.resolve(process.cwd());
const mdFiles = globSync("**/*.md", { 
   cwd: docsPath, 
   ignore: ["node_modules/**"] 
                         });
                                    
            let docsContext = "";
            for (const file of mdFiles) {
                                        const fullPath = path.join(docsPath, file);
                                        const content = fs.readFileSync(fullPath, "utf-8");
       docsContext += `\n--- FILE: ${file} ---\n${content}\n`;
                                    }

    const result = await streamText({
                                        model: google("gemini-flash-latest"),
       system: `You are the EvOC AI Assistant, a specialized technical guide for the Evolve On Click (EvOC) framework. Your PRIMARY goal is to provide accurate information based EXCLUSIVELY on the project's documentation provided below.

DOCUMENTATION CONTEXT:
${docsContext}

INSTRUCTIONS:
1. Strict Grounding: Use ONLY the documentation provided above to answer questions. If the answer is not in the documentation, say: "I'm sorry, I don't see that in the official documentation. You might want to check the specific guides or contact the team."
2. Identity: EvOC is a GUI-based framework for Evolutionary Algorithms using Python/DEAP. 
3. Markdown: Use rich markdown (headers, bold, lists). Use monospaced blocks for Python code from the 'Show Code' sections of the docs.
4. Professionalism: Be helpful, concise, and professional.`,
                                        messages,
                                    });

res.setHeader(
        "Content-Type",
                                        "text/plain; charset=utf-8",
                                    );
                                    res.setHeader("x-vercel-ai-data-stream", "v1");

                                    for await (const textPart of result.textStream) {
                                        res.write(`0:${JSON.stringify(textPart)}\n`);
                                    }
                                    res.end();
 } catch (error) {
                                    console.error(" Chat API ERROR ");
                                    console.error(error);
                                    res.statusCode=500;
  res.end(
      JSON.stringify({
                                            error: error.message,
                                        }),
                                    );
                                }
                            });
                        } else {
                            next();
                        }
                    });
                },
            },
        ],
    },
});
