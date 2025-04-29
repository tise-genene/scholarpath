# Scholarship Frontend

A modern web application to help users discover and apply to global scholarships, built with Next.js 15, Tailwind CSS v4, and TypeScript.

---

## Features
- Dark mode/light mode toggle (latest Tailwind v4 method)
- Responsive design
- Modular, scalable folder structure
- Scholarship search and application flows
- Modern UI components (Header, Footer, Navbar, Cards, etc.)

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **State/Theming:** next-themes
- **Type Checking:** TypeScript
- **Linting:** ESLint
- **Other:** PostCSS, modern tooling

---

## Getting Started

### 1. Clone the repository
```sh
git clone https://github.com/tise-genene/scholarship-frontend.git
cd scholarship-frontend
```

### 2. Install dependencies
```sh
npm install
```

### 3. Start the development server
```sh
npm run dev
```
The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Usage
- Browse scholarships, counseling, webinars, and more via the navigation bar.
- Toggle dark/light mode using the theme toggle button in the Navbar.
- Use the contact page for support or feedback.

---

## Development
- All pages are in `src/app/` (App Router).
- Reusable components are in `src/components/`.
- Theming logic is in `src/theme/`.
- Static assets are in `public/`.
- Global styles are in `src/app/globals.css`.

### Scripts
- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm run lint` — Run ESLint

---

## Deployment
- Deploy on [Vercel](https://vercel.com/) for best results (Next.js native).
- Or use any Node.js-compatible hosting.

### Environment Variables
- Store API keys and secrets in `.env.local` (never commit this file).

---

## Contributing
1. Fork the repo and create your branch from `main`.
2. Make your changes and commit with clear messages.
3. Push to your fork and submit a Pull Request.

---

## License
MIT

---

## Support
For questions or issues, open an issue on GitHub or contact the maintainer.
