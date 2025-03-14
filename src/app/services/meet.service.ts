import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
export interface Meet {
  id: number;
  userId: number;
  userNames: string;
  date: string;
  doctorName: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class MeetService {
  private apiUrl = 'http://localhost:4000/meets';
  private meetsSubject = new BehaviorSubject<any[]>([]);
  meets$ = this.meetsSubject.asObservable();

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    console.log('Token actual:', token);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }

  addMeet(meetData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(this.apiUrl, meetData, { headers });
  }

  getMeetsByUser(identification: string): Observable<any[]> {
    const headers = this.getHeaders();
    return this.http
      .get<any[]>(`${this.apiUrl}/user/${identification}`, { headers })
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
  deleteMeet(meetId: number): Observable<any> {
    const headers = this.getHeaders();
    return this.http
      .delete(`${this.apiUrl}/${meetId}`, { headers })
      .pipe(catchError(this.handleError));
  }
  getMeets(): Observable<Meet[]> {
    const headers = this.getHeaders();
    return this.http.get<Meet[]>(this.apiUrl, { headers }).pipe(
      catchError(this.handleError) // Manejo de errores
    );
  }
}
