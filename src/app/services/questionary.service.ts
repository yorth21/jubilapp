import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Cuestion {
  id: number;
  texto: string;
  options: string[];
  selected: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class QuestionaryService {
  private apiUrl = 'http://localhost:4000/vocational-questions';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get<any[]>(this.apiUrl, { headers });
  }
}
