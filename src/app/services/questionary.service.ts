import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface DimensionScore {
  dimensionId: number;
  name: string;
  description: string;
  score: number;
  maxScore: number;
  percentage: number;
  interpretation: string;
}

interface VocationalResponse {
  testId: number;
  userId: number;
  createdAt: string;
  dimensionScores: DimensionScore[];
  totalScore: number;
  maxTotalScore: number;
  totalPercentage: number;
  overallInterpretation: string;
}

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
  private apiUrl2 = 'http://localhost:4000/vocational-responses/by-user/';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }

  getQuestions(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get<any[]>(this.apiUrl, { headers });
  }

  getUserResponses(identification: string): Observable<VocationalResponse[]> {
    if (!identification) {
      console.error('El ID del usuario es inválido.');
      return new Observable<VocationalResponse[]>((observer) => {
        observer.error('ID de usuario inválido');
      });
    }

    return this.http.get<VocationalResponse[]>(
      `${this.apiUrl2}/${identification}`,
      { headers: this.getHeaders() }
    );
  }

  getVocationalResponsesByUser(identificacion: string): Observable<any[]> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.get<any[]>(
      `http://localhost:4000/vocational-responses/by-user/${identificacion}`,
      { headers }
    );
  }
  sendVocationalResponses(data: { responses: any[] }): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(
      'http://localhost:4000/vocational-responses',
      data,
      { headers }
    );
  }
  getByUser(identification: string): Observable<any> {
    console.log('aqui esta', identification);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get<any>(`${this.apiUrl2}${identification}`, { headers });
  }
}
