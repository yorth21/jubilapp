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

  constructor(private http: HttpClient) {}

  login(identification: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { identification, password }).pipe(
      tap((response) => {
        if (response && response.accessToken) {
          localStorage.setItem('token', response.accessToken);
          localStorage.setItem('user', JSON.stringify(response.user)); // Guardar usuario
          this.userData.next(response.user);
        }
      })
    );
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
    return this.http
      .post<RegisterResponse>(`${this.apiUrl}/register`, userData)
      .pipe(
        catchError((error) => {
          console.error('Error en el registro:', error);
          return throwError(() => new Error('Error en el registro'));
        })
      );
  }
}
