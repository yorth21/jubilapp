import { Component } from '@angular/core';
import { H1HeaderComponent } from '../../components/component/h1-header/h1-header.component';
import { IconJubilComponent } from '../../components/component/icon-jubil/icon-jubil.component';
import { FormLoginComponent } from '../../components/forms/form-login/form-login.component';
import { FooterComponent } from '../../modules/shared/components/footer/footer.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    H1HeaderComponent,
    IconJubilComponent,
    FormLoginComponent,
    FooterComponent,
    CommonModule,
  ],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  identification: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    // Si ya hay una sesión activa, redirigir a "modules"
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/modules']);
    }
  }

  recibirDatosFormulario(datos: { identification: string; password: string }) {
    console.log('Datos recibidos en el padre:', datos);
    this.identification = datos.identification;
    this.password = datos.password;
    this.goToModules();
  }

  goToModules() {
    if (!this.identification || !this.password) {
      alert('Por favor ingrese cédula y contraseña.');
      return;
    }

    this.authService.login(this.identification, this.password).subscribe({
      next: (response) => {
        console.log('Respuesta completa del servidor:', response);

        if (response && response.accessToken) {
          this.authService.saveToken(response.accessToken);
          this.router.navigate(['/modules']);
        } else {
          alert('No se recibió un token válido.');
        }
      },
      error: (error) => {
        console.error('Error en la autenticación:', error);
        alert('Cédula o contraseña incorrecta.');
      },
    });
  }
}
