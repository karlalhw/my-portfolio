const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => {
    // Trust DirectAdmin's reverse proxy — treat X-Forwarded-Proto as the real protocol
    // This prevents Next.js from seeing HTTP and redirecting away from HTTPS
    if (req.headers['x-forwarded-proto'] === 'http') {
      const host = req.headers['x-forwarded-host'] || req.headers.host;
      res.writeHead(301, { Location: `https://${host}${req.url}` });
      res.end();
      return;
    }

    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log('> Ready on port ' + port);
  });
});
