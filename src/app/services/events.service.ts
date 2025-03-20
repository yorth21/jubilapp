import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { EventData } from '../modules/shared/models/eventData';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private BASE_URL = 'http://localhost:4000/events';

  constructor(private http: HttpClient) {}
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }

  createEvent(event: EventData): Observable<EventData> {
    const httpOptions = { headers: this.getHeaders() };
    console.log('data', event);
    return this.http.post<EventData>(this.BASE_URL, event, httpOptions).pipe(
      tap((response) => console.log('Evento creado:', response)),
      catchError((error) => {
        console.error('Error al crear el evento:', error);
        return throwError(() => new Error('Error al crear el evento'));
      })
    );
  }
  getEvents(): Observable<EventData[]> {
    return this.http
      .get<EventData[]>(this.BASE_URL, { headers: this.getHeaders() })
      .pipe(
        tap((response) => console.log('Eventos obtenidos:', response)),
        catchError((error) => {
          console.error('Error al obtener los eventos:', error);
          return throwError(() => new Error('Error al obtener los eventos'));
        })
      );
  }
}
