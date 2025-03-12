import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

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
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  @Output() datosIngresados = new EventEmitter<{
    identification: string;
    password: string;
  }>();

  enviarDatos() {
    if (!this.identification || !this.password) {
      alert('Por favor, ingresa tu cédula y contraseña.');
      return;
    }
    this.isLoading = true;
    this.authService.login(this.identification, this.password).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/modules']);
      },
      error: () => {
        this.isLoading = false;
        alert('Error en la autenticación:');
      },
    });

    // console.log('Datos emitidos:', {
    //   identification: this.identification,
    //   password: this.password,
    // });
    // this.datosIngresados.emit({
    //   identification: this.identification,
    //   password: this.password,
    // });
  }
}
