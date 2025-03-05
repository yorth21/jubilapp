import { Component } from '@angular/core';
import { H1HeaderComponent } from '../../components/component/h1-header/h1-header.component';
import { IconJubilComponent } from '../../components/component/icon-jubil/icon-jubil.component';
import { ButtonIniciarComponent } from '../../components/component/button-iniciar/button-iniciar.component';
import { FormLoginComponent } from '../../components/forms/form-login/form-login.component';
import { FooterComponent } from '../../modules/shared/components/footer/footer.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [
    H1HeaderComponent,
    IconJubilComponent,
    ButtonIniciarComponent,
    FormLoginComponent,
    FooterComponent,
  ],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css',
})
export class IniciarSesionComponent {
  cedula: string = '';
  password: string = '';
  //daticos de prueba
  usuariosValidos = [
    { cedula: '12345', password: '123' },
    { cedula: '87654321', password: 'segura456' },
  ];

  recibirDatosFormulario(datos: { cedula: string; password: string }) {
    this.cedula = datos.cedula;
    this.password = datos.password;
  }

  goToModules() {
    if (!this.cedula || !this.password) {
      alert('Por favor ingrese cédula y contraseña.');
      return;
    }
    const usuarioEncontrado = this.usuariosValidos.find(
      (user) => user.cedula === this.cedula && user.password === this.password
    );

    if (!usuarioEncontrado) {
      alert('Cédula o contraseña incorrecta.');
      return;
    }

    console.log('Autenticado con éxito');
  }
}
