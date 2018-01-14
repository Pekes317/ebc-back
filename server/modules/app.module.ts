import { Module, NestModule } from '@nestjs/common';

import { AppController } from './app/app.controller';
import { AuthModule } from './auth/auth.module';


@Module({
	controllers: [AppController],
	imports: [AuthModule]
})
export class ApplicationModule { }