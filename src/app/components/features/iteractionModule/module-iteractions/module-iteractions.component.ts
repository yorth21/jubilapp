import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Module } from '../../../../modules/shared/models/module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-module-iteractions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './module-iteractions.component.html',
  styleUrl: './module-iteractions.component.css',
})
export class ModuleIteractionsComponent {
  constructor(private router: Router) {}

  modules = signal<Module[]>([
    {
      name: 'FOROS DE SU INTERES',
      img: 'https://images.pexels.com/photos/12296667/pexels-photo-12296667.jpeg?auto=compress&cs=tinysrgb&w=600',
      route: '/foros',
    },
    {
      name: 'INSCRIBIRSE A ACTIVIDADES PRESENCIALES',
      img: 'https://images.pexels.com/photos/7983607/pexels-photo-7983607.jpeg?auto=compress&cs=tinysrgb&w=600',
      route: '/actividades',
    },
  ]);

  goToModule(route: string) {
    this.router.navigate([route]);
  }
}
