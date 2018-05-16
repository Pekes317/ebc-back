import { MiddlewaresConsumer, Module, NestModule } from '@nestjs/common';
import { CorsMiddleware } from '@nest-middlewares/cors';
import { ExpressBearerTokenMiddleware } from '@nest-middlewares/express-bearer-token';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app/app.controller';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { FileManagerModule } from './filemanager/filemanager.module';
import { ImgUploadModule } from './img-upload/img-upload.module';
import { ObjectModule } from './object/object.module';
import { MobileModule } from './mobile/mobile.module';

@Module({
	imports: [
		AuthModule,
		DbModule,
		FileManagerModule,
		ImgUploadModule,
		MobileModule,
		ObjectModule,
		TypeOrmModule.forRoot()
	],
	controllers: [
		AppController
	]
})
export class ApplicationModule implements NestModule {
	configure(consumer: MiddlewaresConsumer) {
		CorsMiddleware.configure({ origin: '*', methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE', preflightContinue: true, optionsSuccessStatus: 200 });
		consumer.apply(CorsMiddleware).forRoutes({ path: '/api/*' }, { path: '/assets/*' });
		consumer.apply(ExpressBearerTokenMiddleware).forRoutes({ path: '*' });
	}
}