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
  questions: any[] = [];
  likertScales: any[] = [];
  form: FormGroup;

  constructor(
    private psychologicalService: TestPsychologicalService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({});
  }

  ngOnInit() {
    this.loadQuestions();
    this.loadLikertScales();
  }

  loadQuestions() {
    this.psychologicalService.getQuestions().subscribe(
      (data) => {
        console.log('📥 Preguntas recibidas:', data);
        this.questions = data;
        this.initializeForm();
      },
      (error) => console.error('❌ Error al obtener preguntas:', error)
    );
  }

  loadLikertScales() {
    this.psychologicalService.getLikertScales().subscribe(
      (data) => {
        console.log('📥 Escalas Likert recibidas:', data);
        this.likertScales = data;
      },
      (error) => console.error('❌ Error al obtener escalas:', error)
    );
  }

  initializeForm() {
    const controls: any = {};
    this.questions.forEach((q) => {
      controls[`q${q.questionId}`] = [null];
    });
    this.form = this.fb.group(controls);
  }

  submitTest(event: Event) {
    event.preventDefault();

    const responses = Object.keys(this.form.value)
      .map((key) => {
        const questionId = parseInt(key.replace('q', ''), 10);
        const scaleId = this.form.value[key];
        return scaleId ? { questionId, scaleId } : null;
      })
      .filter((response) => response !== null);

    if (responses.length === 0) {
      console.error('⚠️ No hay respuestas para enviar.');
      return;
    }

    console.log('📩 Datos enviados:', JSON.stringify(responses, null, 2));

    this.psychologicalService.submitResponses(responses).subscribe(
      (response) =>
        console.log('✅ Respuestas enviadas correctamente:', response),
      (error) => console.error('❌ Error al enviar respuestas:', error)
    );
  }
  trackByQuestionId(index: number, question: any): number {
    return question.questionId;
  }
  trackByScaleId(index: number, scale: any): number {
    return scale.id;
  }
}
