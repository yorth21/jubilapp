import { Component, NgModule } from '@angular/core';
import { IconJubilComponent } from '../../components/component/icon-jubil/icon-jubil.component';
import { FormRegisterComponent } from '../../components/forms/form-register/form-register.component';

import { H1HeaderComponent } from '../../components/component/h1-header/h1-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
        setTimeout(() => {
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'Redirigiendo...',
            timer: 2000,
            showConfirmButton: false,
          }).then(() => {
            this.router.navigate(['/login']);
          });
        });
      },
      error: (error) => {
        Swal.fire({
          heightAuto: true,
          icon: 'error',
          title: 'Error',
          text: 'Error en el registro',
          backdrop: `rgba(0,0,123,0.4)`,
        });
        console.error('Error en el registro', error);
      },
    });
  }
}
