import 'zone.js/dist/zone-node';
import 'reflect-metadata';
global['XMLHttpRequest'] = require('xmlhttprequest').XMLHttpRequest;

import { NestFactory, Reflector } from '@nestjs/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { credential, initializeApp } from 'firebase-admin';
import { json, OptionsJson } from 'body-parser';
import * as express from 'express';

import { ApplicationModule } from './app.module';
import { AuthGuard } from './app/common/auth.guard';
import { appDir } from './app/common/base-path';

const dist = appDir();
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`${dist}/public/main`);
const creds = require('./ebc-admin.json');
const port: number = JSON.parse(process.env.PORT || '50400');

const configuredNgExpressEngine = ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
});

initializeApp({
  credential: credential.cert(creds),
  databaseURL: 'https://ebc2-549f1.firebaseio.com'
});

const reflector = new Reflector()
const size: OptionsJson = {
  limit: '50mb'
};

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.useGlobalGuards(new AuthGuard(reflector));
  app.engine('html', configuredNgExpressEngine);
  app.set('view engine', 'html');
  app.set('views', `${dist}/views`);
  app.use(express.static(`${dist}/views`));
  app.use(json(size));
  app.listen(port, () => console.log(`Application is listening on port ${port}`));
}

bootstrap();

module.exports = bootstrap;