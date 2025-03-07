import { Component, NgModule } from '@angular/core';
import { IconJubilComponent } from '../../components/component/icon-jubil/icon-jubil.component';
import { FormRegisterComponent } from '../../components/forms/form-register/form-register.component';

import { H1HeaderComponent } from '../../components/component/h1-header/h1-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    IconJubilComponent,
    FormRegisterComponent,
    H1HeaderComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}

  recibirDatosRegistro(datos: any) {
    this.authService.register(datos).subscribe({
      next: (response) => {
        console.log('Registro exitoso', response);

        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error en el registro', error);
        alert('Hubo un error en el registro. Inténtalo de nuevo.');
      },
    });
  }
}
