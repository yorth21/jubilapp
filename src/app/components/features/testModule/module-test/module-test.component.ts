import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Module } from '../../../../modules/shared/models/module';
import { ModuloOnlyComponent } from '../../../component/modulo-only/modulo-only.component';

@Component({
  selector: 'app-module-test',
  standalone: true,
  imports: [CommonModule, ModuloOnlyComponent],
  templateUrl: './module-test.component.html',
  styleUrl: './module-test.component.css',
})
export class ModuleTestComponent {
  constructor(private router: Router) {}

  // modules = signal<Module[]>([
  //   {
  //     name: 'EVALUACION PSICOLOGICA',
  //     img: 'https://images.pexels.com/photos/12296667/pexels-photo-12296667.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     route: '/psicologicotest',
  //   },
  //   {
  //     name: 'REPORTES DE CUESTIONARIOS',
  //     img: 'https://images.pexels.com/photos/7983607/pexels-photo-7983607.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     route: '/reportes',
  //   },
  // ]);
  cards = [
    {
      title: 'Evaluación Psicologica',
      description: 'Descubre tu vocación y planifica tu futuro.',
      icon: 'https://images.pexels.com/photos/12296667/pexels-photo-12296667.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/psicologicotest',
    },
    {
      title: 'Reportes De Cuestionarios',
      description: 'Mejora tus habilidades sociales y de comunicación.',
      icon: 'https://images.pexels.com/photos/7983607/pexels-photo-7983607.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/reportes',
    },
  ];

  goToModule(route: string) {
    this.router.navigate([route]);
  }
}
