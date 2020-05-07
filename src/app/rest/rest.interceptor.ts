import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from '../modules/auth/auth.service';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class RestInterceptor implements HttpInterceptor {
​
    constructor(private authService: AuthService,
                private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        if (this.authService.isAuthenticated()) {
            request = request.clone({
                url: environment.baseUrl + request.url,
                setHeaders: {
                    Authorization: this.authService.getToken()
                }
            });
        } else {
            request = request.clone({
                url: environment.baseUrl + request.url
            });
        }

        return next.handle(request).pipe(
            catchError((err: any) => {
                if (err.status === 401) {
                    this.authService.logout();
                    this.router.navigate([ '/' ]);
                }
                return of(err);
            })
        );
    }
}
