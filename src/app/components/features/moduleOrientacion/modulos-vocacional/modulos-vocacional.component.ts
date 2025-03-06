import { Component, signal } from '@angular/core';
import { Module } from '../../../../modules/shared/models/module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulos-vocacional',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modulos-vocacional.component.html',
  styleUrl: './modulos-vocacional.component.css',
})
export class ModulosVocacionalComponent {
  constructor(private router: Router) {}

  modules = signal<Module[]>([
    {
      name: 'PRUEBA VOCACIONAL',
      img: 'https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      route: '/test',
    },
    {
      name: 'RECURSOS DE EXPLORACION LABORAL',
      img: 'https://images.pexels.com/photos/434163/pexels-photo-434163.jpeg?auto=compress&cs=tinysrgb&w=600',
      route: '/exploracion',
    },
    {
      name: 'GUIAS DE ACTIVIDADES RECOMENDADAS',
      img: 'https://images.pexels.com/photos/30960046/pexels-photo-30960046/free-photo-of-anciano-leyendo-el-periodico-cerca-de-la-pagoda-de-tokio.jpeg?auto=compress&cs=tinysrgb&w=600',
      route: '/recomendacion',
    },
  ]);

  goToModule(route: string) {
    this.router.navigate([route]);
  }
}
