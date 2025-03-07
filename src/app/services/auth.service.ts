import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface LoginResponse {
  token: string;
  user: {
    id: number;
    identification: string;
    name: string;
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
  private apiUrl = 'http://localhost:4000/auth/login';

  constructor(private http: HttpClient) {}

  login(identification: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const body = { identification, password };
    console.log('Enviando datos al backend:', body); // 🔍 Verifica en la consola

    return this.http.post<any>(this.apiUrl, body, { headers });
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
