import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://tu-api.com';

  constructor(private http: HttpClient) {}

  login(cedula: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { cedula, password });
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
}
