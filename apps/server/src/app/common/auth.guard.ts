import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs/Observable';
import { auth } from 'firebase-admin';
import { ExtRequest } from '../models/ext-req.model';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: ExtRequest = context.switchToHttp().getRequest();
    const handler = context.getHandler();
    const exposed = this.reflector.get<boolean>('exposed', handler);
    const roles = this.reflector.get<Array<string>>('roles', handler);
    if (exposed) {
      return true;
    }
    if (req.token) {
      return auth()
        .verifyIdToken(req.token)
        .then(decode => {
					req.uid = decode.uid;
          return this.checkRole(decode.role, roles);
        })
        .catch(err => {
          throw new HttpException(err, HttpStatus.UNAUTHORIZED);
        });
    }
    return false;
  }

  checkRole(user, roles: Array<string>) {
    if (roles.includes(user)) {
      return true;
    }
    throw new HttpException(
      {
        error: 'Access denied, insufficient rights.',
        res: `Sorry, don't have permissions to access this resource.`
      },
      HttpStatus.FORBIDDEN
    );
  }
}
