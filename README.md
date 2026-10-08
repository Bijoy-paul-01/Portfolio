# 🚀 Bijoy — AI & Machine Learning Engineer Portfolio

A modern, high-performance portfolio website engineered specifically for an **AI / Machine Learning Engineer & Data Scientist**. Built with **React 18**, **Tailwind CSS**, interactive canvas animations, dual-mode theme system (Dark/Light), and an in-browser live **AI Playground**.

---

## ✨ Key Features

1. **Dual Theme (Toggleable Dark & Light Mode)**
   - **Dark Mode:** Sleek obsidian & slate background with glowing emerald & electric cyan accents.
   - **Light Mode:** Crisp, clean editorial aesthetic with high contrast and smooth typography.
   - Theme preference is saved automatically in `localStorage`.

2. **Interactive In-Browser AI Playground**
   - **Neural Sentiment & Intent Classifier:** Live in-browser text classification with polarity scores, prediction confidence, latency benchmarks, and an attention heatmap token visualizer.
   - **Vector Semantic Search Simulator:** Real-time cosine similarity ranking against a high-dimensional document knowledge base.
   - **LLM Serving & GPU Cost Estimator:** Compares standard FP16 vs optimized vLLM / TensorRT-LLM FP8 serving costs and monthly infrastructure savings.

3. **Production Architecture Showcase**
   - Interactive 6-stage Enterprise RAG & Autonomous Agent diagram.
   - Inspect latency budgets, fallback strategies, and technology choices for each component.

4. **Featured Projects with Deep-Dive Case Study Modals**
   - Filterable by *All*, *LLMs & GenAI*, *Computer Vision*, *MLOps & Infra*, and *Research & NLP*.
   - Each card displays key performance metrics (e.g. `140 FPS on edge GPU · 99.2% mAP@0.5`).
   - Clicking *Architecture Breakdown* opens an in-depth case study modal with Problem, Technical Solution, and Quantitative Results.

5. **Research Publications & Preprints**
   - Clean academic presentation for peer-reviewed papers with conference badges (NeurIPS, ICCV, BioML), venue tags, arXiv links, and code repositories.

6. **Skills & Tooling Radar**
   - Grouped breakdown of Deep Learning, Foundation Models, MLOps, Distributed Systems, Cloud platforms, and Programming Languages.

7. **Interactive Resume Viewer & Print**
   - Built-in clean resume modal with 1-click **"Print / Save as PDF"**.

8. **Zero-Build & Instant Preview**
   - Runs directly in any modern browser without requiring `npm install` or build tools.

---

## 🛠️ Quick Start & Local Preview

### Option 1: Python Dev Server (Recommended)
You already have Python installed! Simply run:
```powershell
python serve.py
```
This starts a local HTTP server at `http://localhost:8080` and opens it in your default browser.

### Option 2: Direct File Open
Simply double-click [`index.html`](file:///C:/Users/bijoy/.gemini/antigravity/scratch/ai-ml-portfolio/index.html) to open it in Chrome, Edge, or Firefox.

---

## 📝 How to Customize Your Details

All your portfolio data is neatly centralized in [`portfolioData.js`](file:///C:/Users/bijoy/.gemini/antigravity/scratch/ai-ml-portfolio/portfolioData.js).

You can easily edit:
- **Personal Info**: Name, tagline, bio, email, location, and social links (GitHub, LinkedIn, Google Scholar, Kaggle, Hugging Face).
- **High-Impact Metrics**: Production inference counts, latency reductions, uptime, etc.
- **Featured Projects**: Add or edit projects, metrics, tags, case study problem/solution, and GitHub links.
- **Skills Matrix**: Update skill proficiencies, frameworks, cloud tools, and programming languages.
- **Publications**: Add your conference papers, workshop articles, and arXiv links.
- **Experience & Education**: Update your career trajectory and university degrees.

---

## 🌐 1-Click Free Deployment

### Method 1: GitHub Pages (Free)
1. Initialize a git repo and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of AI/ML portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-portfolio-repo>.git
   git push -u origin main
   ```
2. In your GitHub repository, go to **Settings** → **Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Your portfolio will be live at `https://<your-username>.github.io/<your-portfolio-repo>/` within 60 seconds!

### Method 2: Vercel / Netlify
- Drag and drop this folder (`ai-ml-portfolio`) into [Netlify Drop](https://app.netlify.com/drop) or import from GitHub on [Vercel](https://vercel.com).
- No build command needed — it deploys instantly!
