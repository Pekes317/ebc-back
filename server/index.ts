import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';

import { ApplicationModule } from './modules/app.module';

const app: Promise<INestApplication> = NestFactory.create(ApplicationModule);
app.then(instance =>
  instance.listen(3000, () =>
    console.log('Application is listening on port 3000')
  )
);