import { Component } from '@angular/core';
import { IconJubilComponent } from '../../components/component/icon-jubil/icon-jubil.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Token } from '@angular/compiler';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IconJubilComponent],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  fondo =
    'https://images.pexels.com/photos/20795206/pexels-photo-20795206/free-photo-of-por-siempre.jpeg?auto=compress&cs=tinysrgb&w=600';
  loginForm: FormGroup;
  errorMessage: string | null = null;
  showAlert = false;
  alertMessage = '';
  alertType: 'success' | 'error' | 'warning' | 'info' = 'info';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      identification: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    const { identification, password } = this.loginForm.value;
    this.authService.login(identification, password).subscribe({
      next: () => {
        console.log(
          '🚀 Login exitoso, usuario identificado:',
          localStorage.getItem('identificacion')
        );
        console.log(Token);
        Swal.fire({
          icon: 'success',
          title: 'Ingreso exitoso',
          text: 'Redirigiendo...',
          timer: 2000,
          showConfirmButton: false,
        });
        setTimeout(() => {
          this.router.navigate(['/modules']);
        }, 2000);
      },
      error: (err) => {
        Swal.fire({
          heightAuto: true,
          icon: 'error',
          title: 'Error',
          text: 'Usuario o contraseña incorrectos',
          backdrop: `rgba(0,0,123,0.4)`,
        });

        console.error('Error en login:', err);
      },
    });
  }
}
