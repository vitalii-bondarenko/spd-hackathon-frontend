import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupRouting } from './signup.routing';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRouting
  ]
})
export class SignupModule { }
