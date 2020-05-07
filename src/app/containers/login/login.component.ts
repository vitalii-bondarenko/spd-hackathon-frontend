import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../modules/auth/auth.service';
import { AuthorizationService } from '../../rest/authorization/authorization.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  subscription: Subscription;
  candidate = {
    email: null,
    password: null
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private authorizationService: AuthorizationService,
    private snotifyService: SnotifyService
  ) {
  }

  login() {
    this.subscription = this.authorizationService.login({email: this.candidate.email, password: this.candidate.password})
      .subscribe(
        tokenDto => {
          this.snotifyService.success(`Welcome, ${tokenDto.fullName}`);
          this.authService.login(tokenDto);
          this.router.navigate(['news']);
        },
        error => {
          this.snotifyService.error(error.message);
        }
      );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
