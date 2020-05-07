import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRouting } from './login.routing';
import { AuthorizationService } from '../../rest/authorization/authorization.service';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRouting,
    FormsModule,
    CustomFormsModule
  ],
  providers: [
    AuthorizationService
  ]
})
export class LoginModule { }
