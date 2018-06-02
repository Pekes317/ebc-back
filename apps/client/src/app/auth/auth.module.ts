import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { CreateUserComponent } from './containers/create-user/create-user.component';
import { LoginComponent } from './containers/login/login.component';
import { ResetComponent } from './containers/reset/reset.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CreateUserComponent,
    ResetComponent,
    LoginComponent
  ]
})
export class AuthModule { }
