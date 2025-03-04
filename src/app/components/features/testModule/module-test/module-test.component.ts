import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../../../modules/shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Module } from '../../../../modules/shared/models/module';

@Component({
  selector: 'app-module-test',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './module-test.component.html',
  styleUrl: './module-test.component.css',
})
export class ModuleTestComponent {
  constructor(private router: Router) {}

  modules = signal<Module[]>([
    {
      name: 'EVALUACION PSICOLOGICA',
      img: 'https://images.pexels.com/photos/12296667/pexels-photo-12296667.jpeg?auto=compress&cs=tinysrgb&w=600',
      route: '/psicologicotest',
    },
    {
      name: 'REPORTES DE CUESTIONARIOS',
      img: 'https://images.pexels.com/photos/7983607/pexels-photo-7983607.jpeg?auto=compress&cs=tinysrgb&w=600',
      route: '/reportes',
    },
  ]);

  goToModule(route: string) {
    this.router.navigate([route]);
  }
}
