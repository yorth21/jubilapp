import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }

  addMeet(meetData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(this.apiUrl, meetData, { headers });
  }

  getMeetsByUser(userId: number): Observable<any[]> {
    const headers = this.getHeaders();
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`, { headers });
  }
}
