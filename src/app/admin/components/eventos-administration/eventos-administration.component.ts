import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventData } from '../../../modules/shared/models/eventData';

@Component({
  selector: 'app-eventos-administration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './eventos-administration.component.html',
  styleUrl: './eventos-administration.component.css',
})
export class EventosAdministrationComponent implements OnInit {
  event: EventData = {
    type: 'concert',
    title: '',
    description: '',
    link: '',
    startDate: '',
    image: '',
    location: '',
  };

  allEvents: EventData[] = [];

  constructor(private eventService: EventsService) {}

  ngOnInit() {
    this.getEvents();
  }

  submitEvent() {
    console.log('datos enviados', this.event);
    this.eventService.createEvent(this.event).subscribe({
      next: (response) => {
        console.log('Evento creado con éxito', response);
        this.getEvents();
      },
      error: (error) => console.error('Error:', error),
    });
  }

  getEvents() {
    this.eventService.getEvents().subscribe({
      next: (events) => {
        this.allEvents = events;
      },
      error: (error) => console.error('Error al obtener eventos:', error),
    });
  }
}
