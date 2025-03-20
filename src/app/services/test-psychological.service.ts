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
  private apiUrl = 'http://localhost:4000/psychological-responses'; // Reemplaza con la URL real
  private psicologiaSubject = new BehaviorSubject<any[]>([]);
  psicologia$ = this.psicologiaSubject.asObservable();

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    console.log('Token actual:', token);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }

  getQuestions(): Observable<any> {
    const headers = this.getHeaders();
    return this.http
      .get(`${this.apiUrl}/questions`, { headers })
      .pipe(catchError(this.handleError));
  }

  // Enviar respuestas del test
  submitResponses(
    responses: { questionId: number; scaleId: number }[]
  ): Observable<any> {
    const headers = this.getHeaders();
    return this.http
      .post(`${this.apiUrl}`, { responses }, { headers })
      .pipe(catchError(this.handleError));
  }

  // Obtener resultados de un test por identificación
  getTestResults(identification: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http
      .get(`${this.apiUrl}/${identification}`, { headers })
      .pipe(catchError(this.handleError));
  }

  // Obtener escalas de respuestas (Likert)
  getLikertScales(): Observable<any> {
    const headers = this.getHeaders();
    return this.http
      .get('http://localhost:4000/likert-scales', { headers })
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      console.error('Endpoint not found:', error.message);
    } else if (error.status === 500) {
      console.error('Internal Server Error:', error.message);
    } else {
      console.error('An error occurred:', error.message);
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
