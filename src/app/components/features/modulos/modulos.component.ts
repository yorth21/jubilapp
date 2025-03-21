import { Component, signal } from '@angular/core';
import { ModuloOnlyComponent } from '../../component/modulo-only/modulo-only.component';
import { Module } from '../../../modules/shared/models/module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulos',
  standalone: true,
  imports: [CommonModule, ModuloOnlyComponent],
  templateUrl: './modulos.component.html',
  styleUrl: './modulos.component.css',
})
export class ModulosComponent {
  constructor(private router: Router) {}

  goToModule(route: string) {
    this.router.navigate([route]);
  }
  cards = [
    {
      title: 'Módulo de Orientación Vocacional',
      description: 'Descubre tu vocación y planifica tu futuro ahora.',
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
      description: 'Evalúa tus habilidades y obtén recomendaciones para ti.',
      icon: 'https://images.pexels.com/photos/8654753/pexels-photo-8654753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/evaluaciones',
    },
  ];
}
