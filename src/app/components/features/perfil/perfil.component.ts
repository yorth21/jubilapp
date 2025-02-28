import { Component } from '@angular/core';
import { MiPerfilComponent } from '../../component/mi-perfil/mi-perfil.component';
import { FooterComponent } from '../../../modules/shared/components/footer/footer.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [MiPerfilComponent, FooterComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent {}
