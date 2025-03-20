import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TestPsychologicalService } from '../../../services/test-psychological.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-psychological',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-psychological.component.html',
  styleUrl: './form-psychological.component.css',
})
export class FormPsychologicalComponent implements OnInit {
  questions: any[] = []; // Guarda las preguntas del test
  likertScales: any[] = []; // Guarda las opciones de respuestas
  responses: any[] = []; // Guarda las respuestas del usuario

  constructor(private psychologicalService: TestPsychologicalService) {}

  ngOnInit() {
    this.loadQuestions();
    this.loadLikertScales();
  }

  loadQuestions() {
    this.psychologicalService.getQuestions().subscribe(
      (data) => {
        console.log('Preguntas recibidas:', data);
        this.questions = data;
      },
      (error) => console.error('Error al obtener preguntas:', error)
    );
  }
  // Cargar escalas de respuestas (Likert)
  loadLikertScales() {
    this.psychologicalService.getLikertScales().subscribe((data) => {
      console.log('Escalas Likert recibidas:', data);
      this.likertScales = data;
    });
  }

  // Guardar la respuesta del usuario
  selectAnswer(questionId: number, scaleId: number) {
    const existingResponse = this.responses.find(
      (r) => r.questionId === questionId
    );
    if (existingResponse) {
      existingResponse.scaleId = scaleId; // Actualizar respuesta
    } else {
      this.responses.push({ questionId, scaleId }); // Agregar nueva respuesta
    }
  }

  // Enviar respuestas a la API
  submitTest() {
    this.psychologicalService
      .submitResponses(this.responses)
      .subscribe((response) => {
        console.log('Test enviado correctamente:', response);
      });
  }
}
