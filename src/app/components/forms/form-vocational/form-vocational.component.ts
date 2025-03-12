import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuestionaryService } from '../../../services/questionary.service';

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
    private questionaryService: QuestionaryService
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
