import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { EbcResetComponent } from './ebc-reset/ebc-reset.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CreateUserComponent,
    EbcResetComponent,
    LoginComponent
  ]
})
export class AuthModule { }
