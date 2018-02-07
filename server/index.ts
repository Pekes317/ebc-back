import 'zone.js/dist/zone-node';

import { NestFactory, NestApplication, Reflector } from '@nestjs/core';
import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { app, credential, initializeApp } from 'firebase-admin';
import * as firebase from 'firebase';
import * as express from 'express';

import { ApplicationModule } from './app.module';
import { AuthGuard } from './common/auth.guard';

const dist = `${process.cwd()}/dist`;
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`${dist}/public/main.bundle`);
const creds = require('./ebc-admin.json');
const clientCreds = require('./ebc-client.json');

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

const client = firebase.initializeApp(clientCreds, app().name);
const reflector = new Reflector();
const serverApp: Promise<INestApplication> = NestFactory.create(ApplicationModule);
serverApp.then(instance => {
  instance.useGlobalGuards(new AuthGuard(reflector))
  instance.engine('html', configuredNgExpressEngine);
  instance.set('view engine', 'html');
  instance.set('views', `${dist}/views`);
  instance.use(express.static(`${dist}/views`));
  instance.listen(3000, () => console.log('Application is listening on port 3000'))
});