import 'zone.js/dist/zone-node';

import { init } from '@backand/nodejs-sdk';
import { NestFactory, NestApplication } from '@nestjs/core';
import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';

import { ApplicationModule } from './modules/app.module';
const dist = `${process.cwd()}/dist`;
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`${dist}/public/main.bundle`);

const configuredNgExpressEngine = ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
});

init({
  appName: 'ebc2',
  anonymousToken: '6755ec7e-3a7e-4dc7-a414-fd1acf8a51a1',
  manageRefreshToken: true,
  // runSocket: true,
  signUpToken: 'dbaea0da-730d-4039-8f8a-77a507a3e908',
  storagePrefix: 'ebc-',
  useAnonymousTokenByDefault: false
});

const app: Promise<INestApplication> = NestFactory.create(ApplicationModule);
app.then(instance => {
  instance.engine('html', configuredNgExpressEngine);
  instance.set('view engine', 'html');
  instance.set('views', `${dist}/views`);
  instance.use(express.static(`${dist}/views`));
  instance.listen(3000, () => console.log('Application is listening on port 3000'))
});