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

Hosted on EVO shared hosting with DirectAdmin. Runs as a Node.js application.

A deploy script is included for Windows. It builds the project, packages `.next/` and `public/` (excluding the build cache), uploads to the server, and extracts in place.

**Requirements:** Windows 10+, OpenSSH, Node.js, `tar` (built into Windows 10+)

**Usage:**

```powershell
.\deploy.ps1
```

You will be prompted for:
- SSH username
- Server IP
- Server path (e.g. `domains/yourdomain.com/public_html/my-portfolio`)

After the script completes, **restart the Node.js app** from the DirectAdmin panel.

**Works with any Next.js app** hosted on EVO/DirectAdmin (or any Linux shared host with SSH access and `tar`/`unzip` available). Just adjust the server path when prompted.

**Manual steps if not on Windows:**

```bash
npm run build
tar -czf next-build.tar.gz --exclude='.next/cache' .next public
scp next-build.tar.gz user@ip:domains/yourdomain.com/public_html/my-app/
ssh user@ip "rm -rf domains/.../.next && cd domains/.../my-app && tar -xzf next-build.tar.gz && rm next-build.tar.gz"
```

Then restart the Node.js app from DirectAdmin.

## Environment Variables

Set in the DirectAdmin Node.js app panel:

```
NODE_ENV=production
```
