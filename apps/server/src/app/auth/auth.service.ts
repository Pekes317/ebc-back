import { Injectable } from '@nestjs/common';
import { auth } from 'firebase-admin';

import { UserDto } from './auth.dto';
import { DbService } from '../db/db.service';

@Injectable()
export class AuthService {
    constructor(private readonly dbConnect: DbService) { }
   
    addUserRole(uid: string, role: string = 'user') {
        return auth().setCustomUserClaims(uid, { role: role });
    }

    async changeRoles(uid: string, role: string) {
        await this.addUserRole(uid, role);
        const user = auth().getUser(uid);
        return user;
    }

    async createNewUser(newUser: UserDto): Promise<any> {
        return await auth().createUser(newUser)
            .then(userRecord => {
                this.addUserRole(userRecord.uid);
                this.syncUsers(userRecord);
                return userRecord;
            });
    }

    async getUsers(next?: string) {
        const fbList: auth.ListUsersResult = await auth().listUsers(1000, next);
        return fbList;
    }

    syncUsers(user) {
        const newUser = this.dbConnect.users.create({
            fbUser: user.uid,
            email: user.email
        });
        this.dbConnect.users.save(newUser);
    }
}
