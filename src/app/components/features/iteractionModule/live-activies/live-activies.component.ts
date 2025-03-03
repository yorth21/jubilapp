import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../../../modules/shared/components/header/header.component';
import { Router } from '@angular/router';
import { Activity } from '../../../../modules/shared/models/activity';

@Component({
  selector: 'app-live-activies',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './live-activies.component.html',
  styleUrl: './live-activies.component.css',
})
export class LiveActiviesComponent {
  constructor(private router: Router) {}

  activites = signal<Activity[]>([
    {
      name: 'EMPANADAS DE LA IGLESIA',
      img: 'https://images.pexels.com/photos/22880519/pexels-photo-22880519/free-photo-of-personas-con-ropa-tradicional-y-comida-en-la-mesa-durante-un-festival-tradicional-en-la-ciudad.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://comfamiliarhuila.com/recreacion/programa-adulto-mayor/',
    },
    {
      name: 'JORNADA DE RECICLAJE',
      img: 'https://images.pexels.com/photos/2682683/pexels-photo-2682683.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://www.comfamiliar.com/conoce-las-ultimas-novedades-de-nuestro-programa-de-gerontologia/',
    },
    {
      name: 'LECTURA Y LITERATURA',
      img: 'https://images.pexels.com/photos/30952073/pexels-photo-30952073/free-photo-of-biblioteca-gabriel-garcia-marquez-barcelona.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '',
    },
    {
      name: 'JORNADA DE PLANTACION',
      img: 'https://images.pexels.com/photos/4503261/pexels-photo-4503261.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '',
    },
  ]);

  goToModule(route: string) {
    this.router.navigate([route]);
  }
}
