import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
  private apiUrl = 'https://tu-api.com/endpoint'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Método para enviar las respuestas a la API
  enviarRespuestas(respuestas: any): Observable<any> {
    return this.http.post(this.apiUrl, respuestas);
  }

  private cuestions: Cuestion[] = [
    {
      id: 1,
      texto: '¿¿Qué tipo de actividades disfrutas más?',
      options: [
        'Dibujar, pintar o hacer manualidades.',
        'Ayudar a las personas en sus problemas',
        'Armar o reparar cosas.',
      ],
      selected: null,
    },
    {
      id: 2,
      texto: '¿Si tuvieras que elegir un trabajo, ¿cuál preferirías?',
      options: [
        'Ser gerente de una empresa.',
        'Trabajar en un laboratorio investigando.',
        'Organizar documentos y llevar registros.',
      ],
      selected: null,
    },
    {
      id: 3,
      texto: '¿Cuál es tu animal favorito?',
      options: ['Perro', 'Gato', 'Elefante', 'Águila'],
      selected: null,
    },
    {
      id: 4,
      texto: '¿Cuál es tu animal favorito?',
      options: ['Perro', 'Gato', 'Elefante', 'Águila'],
      selected: null,
    },
    {
      id: 5,
      texto: '¿Cuál es tu animal favorito?',
      options: ['Perro', 'Gato', 'Elefante', 'Águila'],
      selected: null,
    },
    {
      id: 6,
      texto: '¿Cuál es tu animal favorito?',
      options: ['Perro', 'Gato', 'Elefante', 'Águila'],
      selected: null,
    },
  ];
  private cuestionsSubject = new BehaviorSubject<Cuestion[]>(this.cuestions);
  cuestions$ = this.cuestionsSubject.asObservable();

  actualizarSeleccion(cuestionId: number, seleccionada: string) {
    this.cuestions = this.cuestions.map((cuestion) =>
      cuestion.id === cuestionId ? { ...cuestion, seleccionada } : cuestion
    );
    this.cuestionsSubject.next(this.cuestions);
  }
}
