import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../../../../modules/shared/models/activity';
import { ModuloOnlyComponent } from '../../../component/modulo-only/modulo-only.component';

@Component({
  selector: 'app-live-activies',
  standalone: true,
  imports: [CommonModule, ModuloOnlyComponent],
  templateUrl: './live-activies.component.html',
  styleUrl: './live-activies.component.css',
})
export class LiveActiviesComponent {
  constructor(private router: Router) {}

  cards = [
    {
      title: 'EMPANADAS DE LA IGLESIA',
      description: 'Descubre tu vocación y planifica tu futuro.',
      icon: 'https://images.pexels.com/photos/22880519/pexels-photo-22880519/free-photo-of-personas-con-ropa-tradicional-y-comida-en-la-mesa-durante-un-festival-tradicional-en-la-ciudad.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://comfamiliarhuila.com/recreacion/programa-adulto-mayor/',
    },
    {
      title: 'JORNADA DE RECICLAJE',
      description: 'Mejora tus habilidades sociales y de comunicación.',
      icon: 'https://images.pexels.com/photos/2682683/pexels-photo-2682683.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://www.comfamiliar.com/conoce-las-ultimas-novedades-de-nuestro-programa-de-gerontologia/',
    },
    {
      title: 'LECTURA Y LITERATURA',
      description:
        'Evalúa tus habilidades y obtén recomendaciones personalizadas.',
      icon: 'https://images.pexels.com/photos/30952073/pexels-photo-30952073/free-photo-of-biblioteca-gabriel-garcia-marquez-barcelona.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/evaluaciones',
    },
    {
      title: 'JORA DE PLANTACION',
      description:
        'Evalúa tus habilidades y obtén recomendaciones personalizadas.',
      icon: 'https://images.pexels.com/photos/4503261/pexels-photo-4503261.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/evaluaciones',
    },
  ];

  goToModule(route: string) {
    this.router.navigate([route]);
  }
}
