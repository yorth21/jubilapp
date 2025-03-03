import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css',
})
export class FormLoginComponent {
  cedula: string = '';
  password: string = '';

  @Output() datosIngresados = new EventEmitter<{
    cedula: string;
    password: string;
  }>();

  enviarDatos() {
    this.datosIngresados.emit({ cedula: this.cedula, password: this.password });
  }
}
