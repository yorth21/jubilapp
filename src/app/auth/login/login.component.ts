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
  ],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

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
        this.router.navigate(['/modules']); // 🚀 Redirigir después del login
      },
      error: (err) => {
        this.errorMessage = 'Usuario o contraseña incorrectos';
        console.error('Error en login:', err);
      },
    });
  }
}
