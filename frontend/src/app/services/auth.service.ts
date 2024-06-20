import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {
    this.loadUserFromLocalStorage();
  }

  loadUserFromLocalStorage() {
    const token = localStorage.getItem('access_token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      this.userSubject.next(decodedToken);
    }
  }

  login(credentials: any) {
    return this.http.post('http://localhost:3000/auth/login', credentials)
      .subscribe((response: any) => {
        localStorage.setItem('access_token', response.access_token);
        const decodedToken = this.jwtHelper.decodeToken(response.access_token);
        this.userSubject.next(decodedToken);
        this.router.navigate(['/home']);
      });
  }

  logout() {
    localStorage.removeItem('access_token');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  getUserInfo(): any {
    const userInfo = this.userSubject.value;
  console.log('User Info Retrieved:', userInfo);  // Debugging line
  return userInfo;
  }

  isLoggedIn(): boolean {
    return this.userSubject.value !== null;
  }
}
