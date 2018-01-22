import { MiddlewaresConsumer, Module, NestModule } from '@nestjs/common';
import { CorsMiddleware } from '@nest-middlewares/cors';
import { ServeFaviconMiddleware } from '@nest-middlewares/serve-favicon';
import { ServeStaticMiddleware } from '@nest-middlewares/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app/app.controller';
import { AuthModule } from './auth/auth.module';
import { ClientRoutesModule } from './client-routes/client-routes.module';
import { DbModule } from './db/db.module';
import { ObjectModule } from './object/object.module';

const dist = `${process.cwd()}/dist`;

@Module({
	imports: [
		AuthModule,
		ClientRoutesModule,
		DbModule,
		ObjectModule,
		TypeOrmModule.forRoot()
	],
	controllers: [
		AppController
	]
})
export class ApplicationModule implements NestModule {
	configure(consumer: MiddlewaresConsumer) {
		ServeFaviconMiddleware.configure(`${dist}/views/favicon.ico`);
		ServeStaticMiddleware.configure(`${dist}/views/`);
		consumer.apply(CorsMiddleware).forRoutes(
			{ path: '/api/*' }
		);
		consumer.apply(ServeFaviconMiddleware);
		consumer.apply(ServeStaticMiddleware);
	}
}