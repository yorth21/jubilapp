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
  cuestions: any[] = [];
  constructor(
    private fb: FormBuilder,
    private questionaryService: QuestionaryService
  ) {
    this.form = this.fb.group({});
  }
  ngOnInit() {
    this.questionaryService.cuestions$.subscribe((cuestions) => {
      this.cuestions = cuestions;

      cuestions.forEach((cuestion) => {
        this.form.addControl(
          cuestion.id.toString(),
          this.fb.control(cuestion.selected)
        );
      });
    });
  }
  enviarRespuestas() {
    console.log(this.form.value);
  }

  seleccionarRespuesta(cuestionId: number, selected: string) {
    this.questionaryService.actualizarSeleccion(cuestionId, selected);
    this.form.controls[cuestionId.toString()].setValue(selected);
  }
}
