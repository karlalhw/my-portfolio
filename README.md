# Karla Leung — Portfolio

Personal portfolio website for Karla Leung, Web3 Full-Stack Developer.

Live at [karlalhw.com](https://karlalhw.com)

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Background:** tsParticles (animated network)
- **Email:** Nodemailer (contact form)
- **Fonts:** Press Start 2P, Share Tech Mono (Google Fonts)

## Pages

- `/` — Hero, Skills, Projects
- `/projects` — Full project list
- `/about` — About me
- `/contact` — Contact form

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Deployment

Hosted on EVO shared hosting with DirectAdmin. Runs as a Node.js application via `server.js`.

**To deploy after changes:**

1. Build locally: `npm run build`
2. Zip the `.next/` folder: `Compress-Archive -Path ".next" -DestinationPath "next-build.zip" -Force`
3. SCP the zip to the server
4. SSH in, activate the Node.js environment, navigate to the app directory, then:
   ```bash
   rm -rf .next
   unzip next-build.zip
   chmod -R 755 .next
   ```
5. Restart the Node.js app from DirectAdmin

## Environment Variables

Set these in the DirectAdmin Node.js app panel (not as a file):

```
NODE_ENV=production
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
FROM_EMAIL=
TO_EMAIL=
```
