import { Injectable } from '@nestjs/common';
import { auth } from 'firebase-admin';

import { UserDto } from './auth.dto';
import { DbService } from '../db/db.service';

@Injectable()
export class AuthService {
    constructor(private readonly dbConnect: DbService) { }

    addUserRole(uid: string, role: string = 'user') {
        auth().setCustomUserClaims(uid, { role: role });
    }

    async createNewUser(newUser: UserDto): Promise<any> {
        return await auth().createUser(newUser)
            .then(userRecord => {
                this.addUserRole(userRecord.uid);
                this.syncUsers(userRecord);
                return userRecord;
            });
    }

    syncUsers(user) {
        const newUser = this.dbConnect.users.create({
            fbUser: user.uid,
            email: user.email
        });
        this.dbConnect.users.save(newUser);
    }
}
