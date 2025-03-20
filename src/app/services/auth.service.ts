import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

interface LoginResponse {
  accessToken: string;
  user: {
    id: number;
    names: string;
    lastNames: string;
    identification: string;
    email: string;
    phone: string;
    address: string;
    gender: string;
    birthDate: string;
    job: string;
    isActive: boolean;
  };
}

interface RegisterResponse {
  message: string;
  user: {
    id: number;
    identification: string;
    name: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL = 'http://localhost:4000'; // URL base de la API
  private TOKEN_KEY = 'token';
  private USER_KEY = 'user';
  private userCedula: string | null = null;
  private userData = new BehaviorSubject<any>(null);
  private authStatus = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) {
    this.loadUserFromStorage();
  }

  login(identification: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.BASE_URL}/auth/login`, {
        identification,
        password,
      })
      .pipe(
        tap((response) => {
          if (response.accessToken) {
            this.saveToken(response.accessToken);
            this.saveUser(response.user);
            this.authStatus.next(true);
            if (identification === '1231231231') {
              this.authStatus.next(true);
              this.userCedula = identification;
            }
          }
        }),
        catchError((error) => {
          console.error('Error en el login:', error);
          return throwError(() => new Error('Error en el login'));
        })
      );
  }

  register(userData: any): Observable<RegisterResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post<RegisterResponse>(`${this.BASE_URL}/users`, userData, { headers })
      .pipe(
        catchError((error) => {
          console.error('Error en el registro:', error);
          return throwError(() => new Error('Error en el registro'));
        })
      );
  }

  private saveUser(user: any) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.userData.next(user);
  }

  private saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.userData.next(null);
    this.authStatus.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): Observable<boolean> {
    return this.authStatus.asObservable();
  }
  getUserCedula(): string | null {
    return this.userCedula;
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getUserData(): Observable<any> {
    return this.userData.asObservable();
  }

  private loadUserFromStorage() {
    const user = localStorage.getItem(this.USER_KEY);
    if (user) {
      this.userData.next(JSON.parse(user));
    }
  }
  getUserId(): number | null {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user?.id || null;
  }
  isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user?.isAdmin === true;
  }
}
