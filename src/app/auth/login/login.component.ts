import { Component } from '@angular/core';
import { H1HeaderComponent } from '../../components/component/h1-header/h1-header.component';
import { IconJubilComponent } from '../../components/component/icon-jubil/icon-jubil.component';
import { FormLoginComponent } from '../../components/forms/form-login/form-login.component';
import { FooterComponent } from '../../modules/shared/components/footer/footer.component';
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
import { AlertComponent } from '../../components/component/alert/alert.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    // H1HeaderComponent,
    // IconJubilComponent,
    // FormLoginComponent,
    // FooterComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconJubilComponent,
    AlertComponent,
  ],

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
    if (this.loginForm.invalid) {
      return;
    }

    const { identification, password } = this.loginForm.value;
    this.authService.login(identification, password).subscribe({
      next: () => {
        console.log(Token);
        this.showAlertMessage('Ingreso exitoso', 'success');
        setTimeout(() => {
          this.router.navigate(['/modules']);
        }, 2000);
      },
      error: (err) => {
        this.showAlertMessage('Contraseña incorrecta', 'error');
        this.errorMessage = 'Usuario o contraseña incorrectos';
        console.error('Error en login:', err);
      },
    });
  }
  showAlertMessage(
    message: string,
    type: 'success' | 'error' | 'warning' | 'info'
  ) {
    this.alertMessage = message;
    this.alertType = type;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }
}
