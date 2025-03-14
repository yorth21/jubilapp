import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonExitComponent } from '../../../../../component/button-exit/button-exit.component';

@Component({
  selector: 'app-table-courses',
  standalone: true,
  imports: [CommonModule, ButtonExitComponent],
  templateUrl: './table-courses.component.html',
  styleUrl: './table-courses.component.css',
})
export class TableCoursesComponent {
  eventos = [
    {
      id: 1,
      nombre: 'Taller de Arte Terapéutico',
      descripcion:
        'Explora la pintura y el dibujo como herramientas de relajación y expresión personal.',
      fecha: '2025-04-05',
      participantes: 20,
      lugar: 'Centro Cultural para Adultos Mayores',
      estado: 'Disponible',
      link: 'https://alison.com/es/etiquetar/terapia-artistica',
    },
    {
      id: 2,
      nombre: 'Clase de Gimnasia Suave',
      descripcion:
        'Ejercicios de movilidad, respiración y estiramiento diseñados para personas mayores.',
      fecha: '2025-04-10',
      participantes: 30,
      lugar: 'Salón de Actividades del Hogar de Ancianos',
      estado: 'Disponible',
      link: 'https://grupoaspasia.com/es/cursos/gimnasias-suaves/',
    },
    {
      id: 3,
      nombre: 'Curso de Tecnología Básica',
      descripcion:
        'Aprende a usar teléfonos inteligentes, redes sociales y videollamadas.',
      fecha: '2025-04-15',
      participantes: 25,
      lugar: 'Biblioteca Municipal',
      estado: 'Cupos Llenos',
      link: 'https://edutin.com/curso-de-arte-terapeutico-3945',
    },
    {
      id: 4,
      nombre: 'Música y Recuerdos',
      descripcion:
        'Espacio para cantar, recordar y compartir música de diferentes épocas.',
      fecha: '2025-04-20',
      participantes: 40,
      lugar: 'Centro Recreativo para la Tercera Edad',
      estado: 'Disponible',
      link: 'https://www.facebook.com/groups/629893820425485/?locale=es_LA',
    },
    {
      id: 5,
      nombre: 'Taller de Memoria Activa',
      descripcion:
        'Ejercicios cognitivos para mejorar la memoria y la concentración.',
      fecha: '2025-04-25',
      participantes: 15,
      lugar: 'Casa de la Cultura',
      estado: 'Cupos Llenos',
      link: 'https://ejerciciosdememoria.org/',
    },
  ];

  irAInscripcion(link: string) {
    window.open(link, '_blank'); // Abre el enlace en una nueva pestaña
  }
}
