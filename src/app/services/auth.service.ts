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
  private userData = new BehaviorSubject<any>(null);
  private apiUrl = 'http://localhost:4000/auth/login';
  private apiUrl2 = 'http://localhost:4000/users';

  constructor(private http: HttpClient) {
    this.loadUserFromStorage();
  }

  login(identification: string, password: string): Observable<any> {
    return this.http
      .post<LoginResponse>(this.apiUrl, { identification, password })
      .pipe(
        tap((response) => {
          if (response.accessToken) {
            this.saveToken(response.accessToken);
            this.saveUser(response.user);
          }
        }),
        catchError((error) => {
          console.error('Error en el login:', error);
          return throwError(() => new Error('Error en el login'));
        })
      );
  }
  saveUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.userData.next(user);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }
  logout() {
    localStorage.removeItem('token');
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  getUserData(): Observable<any> {
    return this.userData.asObservable();
  }

  loadUserFromStorage() {
    const user = localStorage.getItem('user');
    if (user) {
      this.userData.next(JSON.parse(user));
    }
  }

  register(userData: any): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl2}`, userData).pipe(
      catchError((error) => {
        console.error('Error en el registro:', error);
        return throwError(() => new Error('Error en el registro'));
      })
    );
  }
}
