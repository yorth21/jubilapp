import { Component, Input, signal } from '@angular/core';
import { Module } from '../../../modules/shared/models/module';
import { HeaderComponent } from '../../../modules/shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo-only',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './modulo-only.component.html',
  styleUrl: './modulo-only.component.css',
})
export class ModuloOnlyComponent {
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
