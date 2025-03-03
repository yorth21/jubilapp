import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonRegistreComponent } from '../../component/button-registre/button-registre.component';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonRegistreComponent,
  ],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css',
})
export class FormRegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
      direccion: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18)]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Formulario enviado:', this.registerForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
