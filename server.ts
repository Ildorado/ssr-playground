import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as path from 'path';
import * as xhr2 from 'xhr2';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

xhr2.prototype._restrictedHeaders = {};

const server = express(); // express web server
const language = path.basename(__dirname); // take folder name "en" or "ru" as current language
const baseHref = language === 'en' ? '/' : `/${language}`; // will be needed in future, to handle different bundles for i18n

// folder where angular put browser bundle
const distFolder = path.join(
  process.cwd(),
  'dist/browser',
  language
);

// ref for index.html file
const indexHtml = existsSync(path.join(distFolder, 'index.original.html'))
  ? 'index.original.html'
  : 'index';

// just port for our app :)
const port = process.env.PORT || 4000;

// This is the place where all magic things happens.
// Actually, it is middleware which use universal CommonEngine
// for building html template for request
server.engine('html', ngExpressEngine({ bootstrap: AppServerModule }));
server.set('view engine', 'html');
server.set('views', distFolder);
server.use(cookieParser());

// helps to serve static files from /browser
server.use(
  baseHref,
  express.static(distFolder, { maxAge: '1y', index: false })
);

server.get('*', (req, res) => {
  const requestInfo = new Date().toISOString() + ` GET: ${req.originalUrl}`;
  console.time(requestInfo);

  res.render(
    indexHtml,
    { req, providers: [{ provide: APP_BASE_HREF, useValue: baseHref }] },
    (error, html) => {
      if (error) console.log(error);
      res.send(html);
      console.timeEnd(requestInfo);
    }
  );
});
server.listen(port, () => {
  console.log(`Node Express server listening on http://localhost:${port}`);
});

export * from './src/main.server';
