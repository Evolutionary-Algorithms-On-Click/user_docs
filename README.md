# <img src="./public/logo.png" width="40" height="40" valign="middle"> EvOC User Documentation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![VitePress](https://img.shields.io/badge/Documentation-VitePress-blueviolet?style=flat-square&logo=vite)](https://vitepress.dev/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Welcome to the official repository for **EvOC (Evolve On Click)** user documentation. This repository contains all the guides, tutorials, and technical documentations for the EvOC framework.

---

## 🛠️ Technology Stack

This repository contains the **documentation site** for EvOC, built with:

- [**VitePress**](https://vitepress.dev/) - Static site generator designed for technical documentation.
- [**Vue.js**](https://vuejs.org/) - Powering the interactivity within the documentation.
- [**Markdown**](https://daringfireball.net/projects/markdown/) - For content creation.

---

## Getting Started

To run this documentation site locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Evolutionary-Algorithms-On-Click/user_docs.git
   cd user_docs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```


3. **Configure API Key:**
   The AI Chat Assistant requires a Google Gemini API key to function locally.
   
   - Create a `.env` file in the root directory:
     ```bash
     touch .env
     ```
   - Add your API Key to the file:
     ```env
     GOOGLE_GENERATIVE_AI_API_KEY=your_actual_api_key_here
     ```
   *(You can get a free key from [Google AI Studio](https://aistudio.google.com/app/apikey))*

4. **Start development server:**
   ```bash
   npm run docs:dev
   ```

5. **Build for production:**
   ```bash
   npm run docs:build
   ```

---

## Project Structure

```bash
user_docs/
├── .vitepress/        # VitePress configuration
├── public/            # Assets like images and logos
├── user-guide/        # Detailed guides for EA, ML tuning, etc.
├── install/           # Installation instructions
├── index.md           # Homepage
├── introduction.md    # Getting started guide
└── package.json       # Project dependencies
```

---

## Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Meet the Team

Developed with ❤️ by the EvOC Team at Amrita School of Computing. Check out the [Team Page](./team.md) for more details.

---

<p align="center">
  <b>Built for the next generation of Evolutionary Computation</b><br>
  <a href="https://github.com/Evolutionary-Algorithms-On-Click">GitHub Organization</a>
</p>
