import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../../modules/shared/components/header/header.component';
import { ModuloOnlyComponent } from '../../component/modulo-only/modulo-only.component';
import { Module } from '../../../modules/shared/models/module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulos',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './modulos.component.html',
  styleUrl: './modulos.component.css',
})
export class ModulosComponent {
  constructor(private router: Router) {}

  modules = signal<Module[]>([
    {
      name: 'MODULO DE ORIENTACION VOCACIONAL',
      img: 'https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png',
      route: '/vocacional',
    },
    {
      name: 'MODULO DE INTERACCION SOCIAL',
      img: 'https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png',
      route: '/interaccion-social',
    },
    {
      name: 'MODULO DE EVALUACIONES PERSONALIZADAS',
      img: 'https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png',
      route: '/interaccion-social',
    },
    {
      name: 'MODULO PSICOLOGIA',
      img: 'https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png',
      route: '/interaccion-social',
    },
  ]);

  goToModule(route: string) {
    this.router.navigate([route]);
  }
}
