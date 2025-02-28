import { Component } from '@angular/core';
import { H1HeaderComponent } from '../../component/h1-header/h1-header.component';
import { IconJubilComponent } from '../../component/icon-jubil/icon-jubil.component';
import { ButtonIniciarComponent } from '../../component/button-iniciar/button-iniciar.component';
import { ButtonRegistreComponent } from '../../component/button-registre/button-registre.component';
import { FooterComponent } from '../../../modules/shared/components/footer/footer.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    H1HeaderComponent,
    IconJubilComponent,
    ButtonIniciarComponent,
    ButtonRegistreComponent,
    FooterComponent,
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {}
