import { Module, NestModule } from '@nestjs/common';

import { AppController } from './app/app.controller';
import { AuthModule } from './auth/auth.module';
import { ClientRoutesModule } from './client-routes/client-routes.module';


@Module({
	imports: [
		AuthModule,
		ClientRoutesModule
	],
	controllers: [
		AppController
	]
})
export class ApplicationModule { }