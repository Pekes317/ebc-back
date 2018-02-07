import { Guard, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { Reflector } from '@nestjs/core';

@Guard()
export class AuthGuard implements CanActivate {

	constructor(private readonly reflector: Reflector) { }

	canActivate(req: any, context: ExecutionContext): boolean {
		const auth = req.headers.authorization;
		const { parent, handler } = context;
		const protect = this.reflector.get<boolean>('protect', handler);
		
		if (auth || protect === false ) {
			return true;
		}
		return false;
	}
}