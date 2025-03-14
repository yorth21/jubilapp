import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonExitComponent } from '../../../../../component/button-exit/button-exit.component';

@Component({
  selector: 'app-table-activities',
  standalone: true,
  imports: [CommonModule, ButtonExitComponent],
  templateUrl: './table-activities.component.html',
  styleUrl: './table-activities.component.css',
})
export class TableActivitiesComponent {
  constructor(private router: Router) {}
  eventos = [
    {
      id: 1,
      nombre: 'Taller de Pintura',
      descripcion: 'Aprende técnicas de pintura al óleo y acrílico.',
      fecha: '2025-03-20',
      participantes: 25,
      lugar: 'Sala de Arte, Universidad',
      estado: 'Disponible',
      link: 'https://edutin.com/curso-de-pintura-3945',
    },
    {
      id: 2,
      nombre: 'Conferencia de Tecnología',
      descripcion: 'Últimas tendencias en Inteligencia Artificial.',
      fecha: '2025-03-25',
      participantes: 50,
      lugar: 'Auditorio Principal',
      estado: 'Disponible',
      link: 'https://www.cepal.org/es/organos-subsidiarios/conferencia-ciencia-innovacion-tecnologias-la-informacion-comunicaciones',
    },
    {
      id: 3,
      nombre: 'Clase de Yoga',
      descripcion: 'Relájate y mejora tu flexibilidad con Yoga.',
      fecha: '2025-03-22',
      participantes: 15,
      lugar: 'Gimnasio',
      estado: 'Cupos Llenos',
      link: 'https://edutin.com/curso-de-yoga-4305',
    },
  ];

  irAInscripcion(link: string) {
    window.open(link, '_blank'); // Abre el enlace en una nueva pestaña
  }
}
