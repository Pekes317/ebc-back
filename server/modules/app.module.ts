import { MiddlewaresConsumer, Module, NestModule } from '@nestjs/common';
import { CorsMiddleware } from '@nest-middlewares/cors';
import { ExpressBearerTokenMiddleware } from '@nest-middlewares/express-bearer-token';
import { ServeFaviconMiddleware } from '@nest-middlewares/serve-favicon';
import { ServeStaticMiddleware } from '@nest-middlewares/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app/app.controller';
import { AuthModule } from './auth/auth.module';
import { ClientRoutesModule } from './client-routes/client-routes.module';
import { ClientRoutesController } from './client-routes/client-routes.controller';
import { DbModule } from './db/db.module';
import { ObjectModule } from './object/object.module';
import { MobileModule } from './mobile/mobile.module';

const dist = `${process.cwd()}/dist`;

@Module({
	imports: [
		AuthModule,
		ClientRoutesModule,
		DbModule,
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
		ServeFaviconMiddleware.configure(`${dist}/views/favicon.ico`);
		ServeStaticMiddleware.configure(`${dist}/views/`);
		consumer.apply(CorsMiddleware).forRoutes({ path:  '/api/*' }, { path: '/assets/svg/*' });
		consumer.apply(ServeFaviconMiddleware).forRoutes(ClientRoutesController);
		consumer.apply(ServeStaticMiddleware).forRoutes(ClientRoutesController);
		consumer.apply(ExpressBearerTokenMiddleware).forRoutes({ path: '/api/*' });
	}
}