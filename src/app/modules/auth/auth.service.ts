import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: null | string = null;

  constructor() {
    this.token = localStorage.getItem('auth-token') || null;
  }

  login(tokenObj) {
    this.setToken(tokenObj.token);
    if (tokenObj.isAdmin) {
      localStorage.setItem('isAdmin', 'true');
    }
  }

  setToken(token: string | null) {
    if (token) {
      localStorage.setItem('auth-token', token);
    } else {
      localStorage.clear();
    }
    this.token = token;
  }

  getToken(): string {
    return this.token || localStorage.getItem('auth-token') || null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  isAdmin(): boolean {
    return !!localStorage.getItem('isAdmin');
  }

  logout() {
    this.setToken(null);
  }

}
