import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuestionaryService } from '../../../services/questionary.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-vocational',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-vocational.component.html',
  styleUrl: './form-vocational.component.css',
})
export class FormVocationalComponent implements OnInit {
  form: FormGroup;
  questions: any[] = [];

  constructor(
    private fb: FormBuilder,
    private questionaryService: QuestionaryService,
    private router: Router
  ) {
    this.form = this.fb.group({});
  }

  ngOnInit() {
    this.questionaryService.getQuestions().subscribe(
      (questions) => {
        console.log('preguntas recibidas', questions);
        this.questions = questions;

        questions.forEach((question) => {
          this.form.addControl(question.id.toString(), this.fb.control(null));
        });
        console.log('controles', this.form.controls);
      },
      (error) => {
        console.error('❌ Error al obtener preguntas:', error);
      }
    );
  }

  sendAnswers() {
    const respuestas = Object.keys(this.form.value)
      .map((questionId) => {
        const selectedAnswerText = this.form.value[questionId];

        const question = this.questions.find(
          (q) => q.id.toString() === questionId
        );
        const selectedAnswer = question?.answers.find(
          (ans: { id: number; answer: string }) =>
            ans.answer === selectedAnswerText
        );

        return {
          questionId: Number(questionId),
          answerId: selectedAnswer ? selectedAnswer.id : null,
        };
      })
      .filter((respuesta) => respuesta.answerId !== null);

    if (respuestas.length === 0) {
      Swal.fire({
        title: 'Alert',
        icon: 'warning',
        backdrop: `rgba(0,0,123,0.4)`,
        text: '⚠️   Debes seleccionar al menos una respuesta antes de enviar.',
      });
    }

    this.questionaryService
      .sendVocationalResponses({ responses: respuestas })
      .subscribe(
        (response) => {
          console.log('✅ Respuestas enviadas con éxito:', response);
          Swal.fire({
            title: 'Confirmacion',
            icon: 'success',
            text: '¡Test enviado con éxito!',
            backdrop: `rgba(0,0,123,0.4)`,
            confirmButtonText: 'Aceptar',
          }).then(() => {
            this.router.navigate(['/reportes']);
          });
        },
        (error) => {
          console.error('❌ Error al enviar respuestas:', error);
          console.log('📌 Detalles del error:', error.error);
        }
      );
  }
  selectAnswer(questionId: number, selected: string) {
    this.form.controls[questionId.toString()].setValue(selected);
  }
}
