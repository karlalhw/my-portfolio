# Karla Leung — Portfolio

Personal portfolio website for Karla Leung, Full-Stack Developer.

Live at [karlalhw.com](https://karlalhw.com)

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Inter (Google Fonts)
- **Smooth Scroll:** Lenis v1.1.16
- **Icons:** Lucide React (SVG inline)

## Design

Two-column sticky sidebar layout inspired by [brittanychiang.com](https://brittanychiang.com).

- Palette: near-black `#0d0d14` background, violet `#818cf8` accent
- Aurora background: 5 animated gradient blobs with mouse repulsion
- Scrollspy: sidebar nav highlights as sections reach mid-screen
- Sections: About, Experience, Skills, Projects

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> Note: Lenis smooth scroll feels different in dev mode (React overhead). Use `npm run build && npm start` to test the real feel.

## Build

```bash
npm run build
```

## Deployment

Hosted on EVO shared hosting with DirectAdmin. Runs as a Node.js application via `server.js`.

**To deploy after changes:**

1. Build locally: `npm run build`
2. Zip the `.next/` folder:
   ```powershell
   Compress-Archive -Path ".next" -DestinationPath "next-build.zip" -Force
   ```
3. SCP the zip to the server
4. SSH in, navigate to the app directory, then:
   ```bash
   rm -rf .next
   unzip next-build.zip
   chmod -R 755 .next
   ```
5. Restart the Node.js app from DirectAdmin

## Environment Variables

Set in the DirectAdmin Node.js app panel:

```
NODE_ENV=production
```
