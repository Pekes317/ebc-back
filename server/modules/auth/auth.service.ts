import { Component } from '@nestjs/common';
import { auth } from 'firebase-admin'; 

import { SignUpDto } from './auth.dto';

@Component()
export class AuthService {
    constructor() {}

    addUserRole(uid: string) {
        auth().setCustomUserClaims(uid, { role: 'user' })
    }

    async createNewUser(newUser: SignUpDto): Promise<any> {
       return await auth().createUser(newUser)
        .then(userRecord => {
            this.addUserRole(userRecord.uid);
            return userRecord;
        });
    }
}
