import { Component, signal } from '@angular/core';
import { Module } from '../../../../modules/shared/models/module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ModuloOnlyComponent } from '../../../component/modulo-only/modulo-only.component';

@Component({
  selector: 'app-modulos-vocacional',
  standalone: true,
  imports: [CommonModule, ModuloOnlyComponent],
  templateUrl: './modulos-vocacional.component.html',
  styleUrl: './modulos-vocacional.component.css',
})
export class ModulosVocacionalComponent {
  constructor(private router: Router) {}

  // modules = signal<Module[]>([
  //   {
  //     name: 'PRUEBA VOCACIONAL',
  //     img: 'https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     route: '/test',
  //   },
  //   {
  //     name: 'RECURSOS DE EXPLORACION LABORAL',
  //     img: 'https://images.pexels.com/photos/434163/pexels-photo-434163.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     route: '/exploracion',
  //   },
  //   {
  //     name: 'GUIAS DE ACTIVIDADES RECOMENDADAS',
  //     img: 'https://images.pexels.com/photos/30960046/pexels-photo-30960046/free-photo-of-anciano-leyendo-el-periodico-cerca-de-la-pagoda-de-tokio.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     route: '/recomendacion',
  //   },
  // ]);
  cards = [
    {
      title: 'Prueba Vocacional',
      description: 'Descubre tu vocación y planifica tu futuro.',
      icon: 'https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/test',
    },
    {
      title: 'Recursos De Exploracion Laboral',
      description: 'Mejora tus habilidades sociales y de comunicación.',
      icon: 'https://images.pexels.com/photos/434163/pexels-photo-434163.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/exploracion',
    },
    {
      title: 'Guias De Actividades Recomendadas',
      description:
        'Evalúa tus habilidades y obtén recomendaciones personalizadas.',
      icon: 'https://images.pexels.com/photos/30960046/pexels-photo-30960046/free-photo-of-anciano-leyendo-el-periodico-cerca-de-la-pagoda-de-tokio.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/recomendacion',
    },
  ];

  goToModule(route: string) {
    this.router.navigate([route]);
  }
}
