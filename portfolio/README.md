# Portfolio Website

My personal portfolio — designed in Figma and built from scratch with React. Focused on a clean, responsive, and accessible experience.

🔗 **Live site:** [portfolio-website-chi-ruby.vercel.app](https://portfolio-website-chi-ruby.vercel.app)

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=white)

## Features

- **Fully responsive** layout across mobile, tablet, and desktop
- **Hero** — introduction with quick access to my resume and email
- **About** — experience with an expandable *View More* drawer, plus education and certifications
- **Projects** — an interactive carousel with detailed case-study modals
- **Skills** — my front-end and UI/UX toolset
- **Connect** — direct links to my socials

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React 19 + Vite |
| Styling | Tailwind CSS |
| Components | Material UI (Modal, Drawer) |
| Deployment | Vercel |

## Getting Started

```bash
# install dependencies
npm install

# start the development server
npm run dev

# create a production build
npm run build

# preview the production build
npm run preview

# run eslint
npm run lint
```

## Project Structure

```
portfolio/
├── public/             # static assets (images, gifs, resume)
└── src/
    ├── components/      # Navbar, Hero, About, Projects, Skills, Connect, Button
    ├── data/           # content — projects, experience, skills, socials
    ├── hooks/          # reusable hooks (useHeightThreshold)
    ├── App.jsx
    └── main.jsx
```

---

<sub>Designed & developed by Jasmin Ivy Fedilo.</sub>
