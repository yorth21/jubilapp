import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../../modules/shared/components/header/header.component';
import { Module } from '../../../modules/shared/models/module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulos-vocacional',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './modulos-vocacional.component.html',
  styleUrl: './modulos-vocacional.component.css',
})
export class ModulosVocacionalComponent {
  constructor(private router: Router) {}

  modules = signal<Module[]>([
    {
      name: 'PRUEBA VOCACIONAL',
      img: 'https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png',
      route: '/test',
    },
    {
      name: 'RECURSOS DE EXPLORACION LABORAL',
      img: 'https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png',
      route: '/interaccion-social',
    },
    {
      name: 'GUIAS DE ACTIVIDADES RECOMENDADAS',
      img: 'https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png',
      route: '/interaccion-social',
    },
  ]);

  goToModule(route: string) {
    this.router.navigate([route]);
  }
}
