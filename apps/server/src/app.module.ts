import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CorsMiddleware } from '@nest-middlewares/cors';
import { ExpressBearerTokenMiddleware } from '@nest-middlewares/express-bearer-token';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AdminModule } from './app/admin/admin.module';
import { AppController } from './app.controller';
import { AuthModule } from './app/auth/auth.module';
import { DbModule } from './app/db/db.module';
import { FileManagerModule } from './app/filemanager/filemanager.module';
import { ImgUploadModule } from './app/img-upload/img-upload.module';
import { ObjectModule } from './app/object/object.module';
import { MobileModule } from './app/mobile/mobile.module';


@Module({
	imports: [
		AdminModule,
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
	configure(consumer: MiddlewareConsumer) {
		CorsMiddleware.configure({ origin: '*', methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE', preflightContinue: true, optionsSuccessStatus: 200 });
		consumer.apply(CorsMiddleware).forRoutes('/api/*');
		consumer.apply(ExpressBearerTokenMiddleware).forRoutes('*');
	}
}