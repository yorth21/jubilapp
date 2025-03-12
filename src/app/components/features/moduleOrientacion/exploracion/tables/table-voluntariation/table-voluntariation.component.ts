import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table-voluntariation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-voluntariation.component.html',
  styleUrl: './table-voluntariation.component.css',
})
export class TableVoluntariationComponent {
  eventos = [
    {
      id: 1,
      nombre: 'Lectura para Niños en Bibliotecas',
      descripcion:
        'Comparte historias y fomenta el hábito de la lectura en niños.',
      fecha: '2025-04-05',
      participantes: 10,
      lugar: 'Biblioteca Municipal',
      estado: 'Disponible',
      link: 'https://bookspring.org/en/',
    },
    {
      id: 2,
      nombre: 'Acompañamiento a Pacientes en Hospitales',
      descripcion:
        'Brinda compañía y apoyo emocional a pacientes hospitalizados.',
      fecha: '2025-04-10',
      participantes: 15,
      lugar: 'Hospital Central',
      estado: 'Disponible',
      link: 'https://www.hospitalsanpedro.org/la-fundacion-hospital-san-pedro-invita-a-formar-parte-del-voluntariado-de-lectura-en-voz-alta/',
    },
    {
      id: 3,
      nombre: 'Huertos Comunitarios',
      descripcion: 'Ayuda a sembrar y cuidar plantas en jardines comunitarios.',
      fecha: '2025-04-15',
      participantes: 20,
      lugar: 'Parque Ecológico',
      estado: 'Disponible',
      link: 'https://www.integracionsocial.gov.co/index.php/noticias/99-noticias-seguridad-alimentaria/5113-las-huertas-comunitarias-y-la-agricultura-urbana-son-una-realidad-en-bogota',
    },
    {
      id: 4,
      nombre: 'Talleres de Oficios para Jóvenes',
      descripcion:
        'Enseña costura, carpintería, cocina o cualquier habilidad que domines.',
      fecha: '2025-04-20',
      participantes: 12,
      lugar: 'Centro de Formación Juvenil',
      estado: 'Disponible',
      link: 'https://www.pasto.gov.co/index.php/noticias-cultura/14509-desde-el-intercambio-de-experiencias-pasto-realiza-la-semana-de-la-participacion-y-la-cultura-ciudadana',
    },
    {
      id: 5,
      nombre: 'Visitas a Hogares de Niños',
      descripcion:
        'Organiza juegos, manualidades y momentos de alegría para niños en casas de acogida.',
      fecha: '2025-04-25',
      participantes: 8,
      lugar: 'Hogar Infantil Sonrisas',
      estado: 'Cupos Llenos',
      link: 'https://icbf.gov.co/portafolio-de-servicios-icbf/hogares-infantiles-lactantes-y-preescolares',
    },
  ];

  irAInscripcion(link: string) {
    window.open(link, '_blank');
  }
}
