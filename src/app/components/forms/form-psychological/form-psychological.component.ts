import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
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
  cuestions: any[] = [];
  constructor(
    private fb: FormBuilder,
    private testPsychologicalService: TestPsychologicalService
  ) {
    this.form = this.fb.group({});
  }
  ngOnInit() {
    this.testPsychologicalService.cuestions$.subscribe((cuestions) => {
      this.cuestions = cuestions;

      cuestions.forEach((cuestion) => {
        this.form.addControl(
          cuestion.id.toString(),
          this.fb.control(cuestion.selected)
        );
      });
    });
  }
  sendAnswers() {
    const respuestas = this.form.value;
    this.testPsychologicalService.enviarRespuestas(respuestas).subscribe(
      (response) => {
        console.log('Respuestas enviadas con éxito', response);
      },
      (error) => {
        console.error('Error al enviar las respuestas', error);
      }
    );
  }

  selectAnswer(cuestionId: number, selected: string) {
    this.testPsychologicalService.actualizarSeleccion(cuestionId, selected);
    this.form.controls[cuestionId.toString()].setValue(selected);
  }
}
