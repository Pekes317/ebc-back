import { Guard, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { Reflector } from '@nestjs/core';
import { auth } from 'firebase-admin';

@Guard()
export class AuthGuard implements CanActivate {

	constructor(private readonly reflector: Reflector) { }

	canActivate(req: any, context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>  {
		const { parent, handler } = context;
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