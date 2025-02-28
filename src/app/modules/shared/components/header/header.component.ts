import { Component } from '@angular/core';

import { IconJubilComponent } from '../../../../components/component/icon-jubil/icon-jubil.component';
import { ButtonExitComponent } from '../../../../components/component/button-exit/button-exit.component';
import { MiPerfilComponent } from '../../../../components/component/mi-perfil/mi-perfil.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    IconJubilComponent,
    ButtonExitComponent,
    ButtonExitComponent,
    MiPerfilComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  titulo = 'SELECCIONE UN APARTADO';
}
