import { Component } from '@angular/core';
import { H1HeaderComponent } from '../../components/component/h1-header/h1-header.component';
import { IconJubilComponent } from '../../components/component/icon-jubil/icon-jubil.component';
import { ButtonIniciarComponent } from '../../components/component/button-iniciar/button-iniciar.component';
import { FormLoginComponent } from '../../components/forms/form-login/form-login.component';
import { FooterComponent } from '../../modules/shared/components/footer/footer.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    H1HeaderComponent,
    IconJubilComponent,
    ButtonIniciarComponent,
    FormLoginComponent,
    FooterComponent,
    HttpClientModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  cedula: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  recibirDatosFormulario(datos: { cedula: string; password: string }) {
    this.cedula = datos.cedula;
    this.password = datos.password;
  }

  goToModules() {
    if (!this.cedula || !this.password) {
      alert('Por favor ingrese cédula y contraseña.');
      return;
    }

    this.authService.login(this.cedula, this.password).subscribe({
      next: (response) => {
        console.log('Autenticado con éxito', response);

        this.router.navigate(['/modules']);
      },
      error: (error) => {
        console.error('Error en la autenticación', error);
        alert('Cédula o contraseña incorrecta.');
      },
    });
  }
}
