import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestPsychologicalService {
  private apiUrl = 'http://localhost:4000/psychological-responses/questions';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }

  getQuestions(): Observable<any[]> {
    return this.http
      .get<any[]>(this.apiUrl, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('❌ Error en la petición:', error);
    return throwError(() => new Error('Error al obtener las preguntas'));
  }
}
