import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css',
})
export class FormLoginComponent {
  identification: string = '';
  password: string = '';

  @Output() datosIngresados = new EventEmitter<{
    identification: string;
    password: string;
  }>();

  enviarDatos() {
    if (!this.identification || !this.password) {
      alert('Por favor, ingresa tu cédula y contraseña.');
      return;
    }
    console.log('Datos emitidos:', {
      identification: this.identification,
      password: this.password,
    });
    this.datosIngresados.emit({
      identification: this.identification,
      password: this.password,
    });
  }
}
