<<<<<<< HEAD
# eCommerce-yar
=======
# Commerce Starter

Modern e-commerce scaffold built with Vite and React that ships with routing, global state, styling, data fetching, notifications, and iconography pre-wired.

## Stack

- React 19 + Vite 7 with fast HMR
- React Router v5 for client-side routing
- Redux with thunk middleware for async flows
- Tailwind CSS for utility-first styling
- Axios for API communication via a shared client
- React Toastify for user notifications
- lucide-react icon set

## Getting started

```bash
npm install
npm run dev
```

Available scripts:

- `npm run dev` – start the Vite dev server.
- `npm run build` – create a production build (validated).
- `npm run preview` – preview the production build locally.
- `npm run lint` – run ESLint with the included configuration.

## Environment variables

Create a `.env` file and set `VITE_API_BASE_URL` to point Axios at your backend:

```bash
VITE_API_BASE_URL=https://api.example.com
```

The default fallback hits the JSONPlaceholder API for demonstration.

## GitHub & Deployment

1. Initialise a repository: `git init`, create a `.gitignore` if needed (already provided), and commit.
2. Create a remote GitHub repo and push:
   ```bash
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. Deploy using your preferred platform:
   - **Vercel**: Import the GitHub repo, select the `main` branch, framework preset “Vite”, and set any env vars under *Settings → Environment Variables*.
   - **Netlify**: Use “Import an existing project”, connect GitHub, set build command `npm run build`, publish directory `dist`, and configure env vars.
   - **Render**: Create a *Static Site*, connect the repo, set build command `npm run build`, publish directory `dist`, and add env vars under *Environment*.

Need tips? Refer to the Workintech E-Comm Projesi Doping playlist mentioned in the brief for further guidance.
>>>>>>> ad6b192 (İlk commit)
