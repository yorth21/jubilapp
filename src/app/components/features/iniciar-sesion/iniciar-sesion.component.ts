import { Component } from '@angular/core';
import { H1HeaderComponent } from '../../component/h1-header/h1-header.component';
import { IconJubilComponent } from '../../component/icon-jubil/icon-jubil.component';
import { ButtonIniciarComponent } from '../../component/button-iniciar/button-iniciar.component';
import { FormLoginComponent } from '../../forms/form-login/form-login.component';
import { FooterComponent } from '../../../modules/shared/components/footer/footer.component';
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
  constructor(private router: Router) {}

  goToAbout() {
    this.router.navigate(['/modules']);
  }
}
