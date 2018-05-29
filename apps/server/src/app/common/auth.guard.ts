import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { Reflector } from '@nestjs/core';
import { auth } from 'firebase-admin';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private readonly reflector: Reflector) { }

	canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>  {
		const req = context.switchToHttp().getRequest();
		const handler = context.getHandler();
		const exposed = this.reflector.get<boolean>('exposed', handler);
		const role = this.reflector.get<string>('role', handler);
		if (exposed) {
			return true;
		}
		if (req.token) {
			return auth().verifyIdToken(req.token)
			.then(decode => {
				req.uid = decode.uid;
				return this.checkRole(decode.role, role);
			})
		  .catch(err => {
				throw new HttpException(err, HttpStatus.UNAUTHORIZED);
			}) 
		}
		return false;
	}

	checkRole(user, role) {
		return true;
	}
}