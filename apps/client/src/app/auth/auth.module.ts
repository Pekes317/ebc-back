import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { CreateUserComponent } from './containers/create-user/create-user.component';
import { LoginComponent } from './containers/login/login.component';
import { ResetComponent } from './containers/reset/reset.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    CreateUserComponent,
    ResetComponent,
    LoginComponent
  ]
})
export class AuthModule { }
