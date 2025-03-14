import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Module } from '../../../../modules/shared/models/module';
import { CommonModule } from '@angular/common';
import { ModuloOnlyComponent } from '../../../component/modulo-only/modulo-only.component';
import { ButtonExitComponent } from '../../../component/button-exit/button-exit.component';

@Component({
  selector: 'app-module-iteractions',
  standalone: true,
  imports: [CommonModule, ModuloOnlyComponent, ButtonExitComponent],
  templateUrl: './module-iteractions.component.html',
  styleUrl: './module-iteractions.component.css',
})
export class ModuleIteractionsComponent {
  constructor(private router: Router) {}

  // modules = signal<Module[]>([
  //   {
  //     name: 'FOROS DE SU INTERES',
  //     img: 'https://images.pexels.com/photos/12296667/pexels-photo-12296667.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     route: '/foros',
  //   },
  //   {
  //     name: 'INSCRIBIRSE A ACTIVIDADES PRESENCIALES',
  //     img: 'https://images.pexels.com/photos/7983607/pexels-photo-7983607.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     route: '/actividades',
  //   },
  // ]);
  cards = [
    {
      title: 'Foros De Su Interes',
      description: 'Descubre tu vocación y planifica tu futuro.',
      icon: 'https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/foros',
    },
    {
      title: 'Inscribirse Actividades Presenciales',
      description: 'Mejora tus habilidades sociales y de comunicación.',
      icon: 'https://images.pexels.com/photos/434163/pexels-photo-434163.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/actividades',
    },
  ];

  goToModule(route: string) {
    this.router.navigate([route]);
  }
}
