import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-events.component.html',
  styleUrl: './table-events.component.css',
})
export class TableEventsComponent {
  eventos = [
    {
      id: 1,
      nombre: 'Taller de Pintura',
      descripcion: 'Aprende técnicas de pintura al óleo y acrílico.',
      fecha: '2025-03-20',
      participantes: 25,
      lugar: 'Sala de Arte, Universidad',
      estado: 'Disponible',
    },
    {
      id: 2,
      nombre: 'Conferencia de Tecnología',
      descripcion: 'Últimas tendencias en Inteligencia Artificial.',
      fecha: '2025-03-25',
      participantes: 50,
      lugar: 'Auditorio Principal',
      estado: 'Disponible',
    },
    {
      id: 3,
      nombre: 'Clase de Yoga',
      descripcion: 'Relájate y mejora tu flexibilidad con Yoga.',
      fecha: '2025-03-22',
      participantes: 15,
      lugar: 'Gimnasio',
      estado: 'Cupos Llenos',
    },
  ];

  irAInscripcion(id: number) {
    alert(`Redirigiendo a la inscripción del evento con ID: ${id}`);
    // Aquí puedes usar Router para redirigir: this.router.navigate(['/inscripcion', id]);
  }
}
