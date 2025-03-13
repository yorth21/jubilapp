import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
interface Cuestion {
  id: number;
  texto: string;
  options: string[];
  selected: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class TestPsychologicalService {
  private apiUrl = 'http://localhost:4000/psychological-test';
  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http
      .get<any[]>(this.apiUrl, { headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      console.error('Endpoint not found:', error.message);
    } else {
      console.error('An error occurred:', error.message);
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
