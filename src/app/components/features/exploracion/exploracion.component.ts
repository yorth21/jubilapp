import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../../modules/shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Module } from '../../../modules/shared/models/module';

@Component({
  selector: 'app-exploracion',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './exploracion.component.html',
  styleUrl: './exploracion.component.css',
})
export class ExploracionComponent {
  constructor(private router: Router) {}

  activites = signal<Module[]>([
    {
      name: 'ACTIVIDADES DE PASTO EN SEMANA',
      img: 'https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png',
      route: ' ',
    },
    {
      name: 'CURSOS DISPONIBLES',
      img: 'https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png',
      route: ' ',
    },
    {
      name: 'OPORTUNIDADES DE VOLUNTARIADO',
      img: 'https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png',
      route: ' ',
    },
  ]);

  goToModule(route: string) {
    this.router.navigate([route]);
  }
}
