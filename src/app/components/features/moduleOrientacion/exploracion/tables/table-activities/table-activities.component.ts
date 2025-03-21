import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonExitComponent } from '../../../../../component/button-exit/button-exit.component';
import { ModuloOnlyComponent } from '../../../../../component/modulo-only/modulo-only.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-activities',
  standalone: true,
  imports: [CommonModule, ButtonExitComponent, ModuloOnlyComponent],
  templateUrl: './table-activities.component.html',
  styleUrl: './table-activities.component.css',
})
export class TableActivitiesComponent {
  cards: any[] = [];
  private apiUrl = 'http://localhost:4000/events/type/event';
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.fetchConcertEvents();
  }

  fetchConcertEvents() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (events) => {
        this.cards = events.map((event) => ({
          title: event.title,
          description: event.description,
          icon: event.image,
          link: event.link,
        }));
      },
      error: (err) => {
        console.error('Error fetching events:', err);
      },
    });
  }

  irAInscripcion(link: string) {
    window.open(link, '_blank');
  }
}
