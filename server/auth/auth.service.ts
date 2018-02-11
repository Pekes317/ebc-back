import { Component } from '@nestjs/common';
import { auth } from 'firebase-admin';

import { SignUpDto } from './auth.dto';
import { DbService } from '../db/db.service';

@Component()
export class AuthService {
    constructor(private readonly dbConnect: DbService) { }

    addUserRole(uid: string) {
        auth().setCustomUserClaims(uid, { role: 'user' });
    }

    async createNewUser(newUser: SignUpDto): Promise<any> {
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
