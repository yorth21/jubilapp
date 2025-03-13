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
  form: FormGroup;
  questions: any[] = [];

  constructor(
    private fb: FormBuilder,
    private questionaryService: TestPsychologicalService
  ) {
    this.form = this.fb.group({});
  }

  ngOnInit() {
    this.questionaryService.getQuestions().subscribe((questions) => {
      this.questions = questions;

      questions.forEach((question) => {
        this.form.addControl(question.id.toString(), this.fb.control(null));
      });
    });
  }

  sendAnswers() {
    console.log(this.form.value);
  }

  selectAnswer(questionId: number, selected: string) {
    this.form.controls[questionId.toString()].setValue(selected);
  }
}
