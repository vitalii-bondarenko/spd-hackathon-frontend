import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { CandidateDto } from './CandidateDto';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) {
  }

  login(candidate: CandidateDto) {
    // return of({token: 'test-token', fullName: 'Vasilii', isAdmin: true});
    return this.http.post<CandidateDto>('/api/auth/login', candidate);
  }

}
