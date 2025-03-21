import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestPsychologicalService {
  private baseUrl = 'http://localhost:4000';
  private psicologiaSubject = new BehaviorSubject<any[]>([]);
  psicologia$ = this.psicologiaSubject.asObservable();

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }

  getQuestions(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/psychological-responses/questions`, {
        headers: this.getHeaders(),
      })
      .pipe(catchError(this.handleError));
  }

  getLikertScales(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/likert-scales`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  submitResponses(
    responses: { questionId: number; scaleId: number }[]
  ): Observable<any> {
    return this.http
      .post(
        `${this.baseUrl}/psychological-responses`,
        { responses },
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }

  getTestResults(identification: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/psychological-responses/${identification}`, {
        headers: this.getHeaders(),
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error. Intenta de nuevo más tarde.';
    if (error.status === 404) {
      errorMessage = 'No se encontró el recurso solicitado.';
    } else if (error.status === 500) {
      errorMessage = 'Error interno en el servidor.';
    }
    console.error('Error:', error.message);
    return throwError(() => new Error(errorMessage));
  }
}
