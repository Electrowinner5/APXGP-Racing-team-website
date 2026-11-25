# APXGP RACING — Official STEM Motorsport Website

Multi-page Formula 1 constructor-grade website for **APXGP Racing** styled in carbon obsidian and your official team colour **`#0A7968`**.

---

## Quick Start (Run Locally)

```bash
npm install
npm run build
npm start
```

Open `http://localhost:3000`.

---

## Publishing Options

### Option 1 — Full-Stack Publish (Recommended: Includes Live `/admin` CMS, Uploads & Contact Inbox)
Deploy to **Render**, **Railway**, **Fly.io**, or any Node.js host:
1. Upload this project folder to a GitHub repository (or deploy directly via Railway CLI / Render).
2. Configure:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Environment Variable (recommended for persistent login sessions):** `APXGP_SESSION_SECRET` (any long random string)
3. Visit `https://your-domain.com/admin` to create your team administrator login, upload your official logo and sponsorship PDF, and edit content live.

### Option 2 — Instant Static Publish (Netlify / Vercel / Cloudflare Pages)
If you want to go live in under 60 seconds without a Node backend:
- **Netlify Drop**: Unzip `apxgp-racing-static-deploy.zip` (or use the `dist/` folder here) and drag-and-drop it onto https://app.netlify.com/drop.
- **Vercel**: Push this project to GitHub and import into https://vercel.com — Vite and `vercel.json` are already configured automatically.

*(Note: Static hosting serves all 12+ pages, routing, interactive car blueprint, lightbox gallery, and shopping cart cleanly. The `/admin` CMS save/upload features and server inquiry storage require Option 1's Node.js backend.)*

---

## Changing Team Colours or Default Content
- **CSS Variables**: Edit `src/styles/theme.css` (`--color-accent: #0a7968`).
- **Default Content**: Edit `src/data/defaultContent.ts` (or use `/admin` when running with the Node backend).
