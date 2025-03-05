import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../../modules/shared/components/header/header.component';
import { ModuloOnlyComponent } from '../../component/modulo-only/modulo-only.component';
import { Module } from '../../../modules/shared/models/module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LayoutComponent } from '../../../layout/layout.component';

@Component({
  selector: 'app-modulos',
  standalone: true,
  imports: [CommonModule, ModuloOnlyComponent],
  templateUrl: './modulos.component.html',
  styleUrl: './modulos.component.css',
})
export class ModulosComponent {
  constructor(private router: Router) {}

  modules = signal<Module[]>([
    {
      name: 'MODULO DE ORIENTACION VOCACIONAL',
      img: 'https://images.pexels.com/photos/3789100/pexels-photo-3789100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      route: '/vocacional',
    },
    {
      name: 'MODULO DE INTERACCION SOCIAL',
      img: 'https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      route: '/social',
    },
    {
      name: 'MODULO DE EVALUACIONES PERSONALIZADAS',
      img: 'https://images.pexels.com/photos/8654753/pexels-photo-8654753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      route: '/evaluaciones',
    },
    {
      name: 'MODULO PSICOLOGIA',
      img: 'https://images.pexels.com/photos/7195310/pexels-photo-7195310.jpeg?auto=compress&cs=tinysrgb&w=600',
      route: '/psicologo',
    },
  ]);

  goToModule(route: string) {
    this.router.navigate([route]);
  }
  cards = [
    {
      title: 'Módulo de Orientación Vocacional',
      description: 'Descubre tu vocación y planifica tu futuro.',
      icon: 'https://images.pexels.com/photos/3789100/pexels-photo-3789100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/vocacional',
    },
    {
      title: 'Módulo de Interacción Social',
      description: 'Mejora tus habilidades sociales y de comunicación.',
      icon: 'https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/social',
    },
    {
      title: 'Módulo de Evaluaciones Personalizadas',
      description:
        'Evalúa tus habilidades y obtén recomendaciones personalizadas.',
      icon: 'https://images.pexels.com/photos/8654753/pexels-photo-8654753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/evaluaciones',
    },
  ];
}
