# Three.js + TypeScript Starter Template (Vite)

A reusable starter template for building Three.js projects using TypeScript and Vite.

This template removes the need to repeat setup steps every time a new Three.js project is started. It includes a clean Vite + TypeScript environment with Three.js already configured so development can begin immediately.

The repository intentionally excludes node_modules and build outputs to keep it lightweight.

---

## Stack

- Vite — development server and bundler
- TypeScript — type-safe JavaScript
- Three.js — 3D rendering library

---

## Purpose

This template exists to speed up Three.js project initialization by providing:

- Vite + TypeScript setup
- Three.js installed
- Clean project structure
- Minimal boilerplate

---

## Using This Template for a New Project

### 1. Create a project from template
On GitHub:

Use this template → Create new repository.

Name your project and create the repo.

---

### 2. Clone your new project locally

\`\`\`bash
git clone <your-new-repo-url>
cd <project-folder>
\`\`\`

---

### 3. Install dependencies

\`\`\`bash
npm install
\`\`\`

This installs all dependencies defined in package.json including:

- three
- @types/three
- vite
- typescript
- glsl plugin

---

### 4. Start development server

\`\`\`bash
npm run dev
\`\`\`

Open the local server URL shown in the terminal.

---

## Build for Production

\`\`\`bash
npm run build
\`\`\`

Production files are output to:

dist/

---

## Notes

- node_modules is not stored in the repository.
- Dependencies are installed locally using npm install.
- Modify or extend the template as needed for each project.

---

## License

Free to use for personal and commercial projects.
