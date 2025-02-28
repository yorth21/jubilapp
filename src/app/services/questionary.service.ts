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
export class QuestionaryService {
  private cuestions: Cuestion[] = [
    {
      id: 1,
      texto: '¿Cuál es tu color favorito?',
      options: ['Rojo', 'Azul', 'Verde', 'Amarillo'],
      selected: null,
    },
    {
      id: 2,
      texto: '¿Cuál es tu animal favorito?',
      options: ['Perro', 'Gato', 'Elefante', 'Águila'],
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
