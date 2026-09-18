# FlyRank Capstone — Simple Dashboard

## What it does

This project is a simple responsive dashboard website created for the FlyRank capstone. It provides a clean home page and separate Dashboard, Projects, Settings, and Health screens.

## Features

- Responsive dashboard layout
- Simple navigation between pages
- Project status cards
- Application health screen
- Mobile-friendly design
- Production-ready Next.js structure
- Environment-variable template
- No secret API keys committed to Git

## Screenshots

Add your production screenshots here after deployment.

Example:

![Home screenshot](./public/home-screenshot.png)

![Dashboard screenshot](./public/dashboard-screenshot.png)

## Tech stack

- Next.js
- React
- JavaScript
- CSS
- Vercel for deployment

## Run locally

1. Install Node.js.
2. Extract this project.
3. Open the project folder in VS Code.
4. Open a terminal in the project folder.
5. Run:

```bash
npm install
npm run dev
```

6. Open `http://localhost:3000`.

## Environment variables

Copy `.env.example` to `.env.local` if an AI provider key is required later.

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | Optional | API key for a future Gemini-powered route |

Never commit `.env.local` or a real API key.

## Architecture

```text
app/
├── page.js
├── dashboard/page.js
├── projects/page.js
├── settings/page.js
├── health/page.js
├── layout.js
└── globals.css
```

The application uses Next.js App Router. Each dashboard screen is a separate route and the shared navigation is repeated in the simple page components.

## Production deployment

The application can be deployed to Vercel:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Use the default Next.js build settings.
4. Add production environment variables only when required.
5. Deploy.
6. Open the public URL and test Home, Dashboard, Projects, Settings, and Health.

## Production hygiene

This project does not expose API keys in source code. Input limits should be added to any future AI/API route before enabling it publicly. For streaming routes, use a sensible route duration limit such as `maxDuration = 30` rather than allowing requests to run indefinitely.

## AI tools built this

AI assistance was used during development for code generation, debugging, documentation, and project-structure suggestions. The generated code was reviewed and adapted for this project rather than being treated as an unquestioned final implementation. No private API keys or secrets were supplied to the repository.

## Git hygiene

Do not commit:

- `.env.local`
- API keys
- passwords
- private credentials

`package-lock.json` should be committed so that dependency versions are reproducible.

## License

This project is created for educational/capstone purposes.
