import { Component, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ModuloOnlyComponent } from '../../../component/modulo-only/modulo-only.component';

@Component({
  selector: 'app-exploracion',
  standalone: true,
  imports: [CommonModule, ModuloOnlyComponent],
  templateUrl: './exploracion.component.html',
  styleUrl: './exploracion.component.css',
})
export class ExploracionComponent {
  selectedModule: string | null = null;
  constructor(private router: Router) {}

  cards = [
    {
      title: 'ACTIVIDADES DE PASTO EN SEMANA',
      description: 'Descubre las actividades que puedes realizar en Pasto.',
      icon: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/tableactivities',
    },
    {
      title: 'CURSOS DISPONIBLES',
      description:
        'Mejora tus habilidades y conocimientos con nuestros cursos.',
      icon: 'https://images.pexels.com/photos/5990271/pexels-photo-5990271.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/tablecourses',
    },
    {
      title: 'VOLUNTARIADO',
      description:
        'Evalúa tus habilidades y conoce las oportunidades de voluntariado.',
      icon: 'https://images.pexels.com/photos/28662967/pexels-photo-28662967/free-photo-of-voluntarios-plantan-arboles-en-las-dunas-de-arena-de-phan-thi-t.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/tablevoluntary',
    },
  ];

  goToModule(route: string) {
    this.router.navigate([route]);
  }
}
