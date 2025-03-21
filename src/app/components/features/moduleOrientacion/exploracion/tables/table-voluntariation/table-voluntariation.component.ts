import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonExitComponent } from '../../../../../component/button-exit/button-exit.component';
import { ModuloOnlyComponent } from '../../../../../component/modulo-only/modulo-only.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-voluntariation',
  standalone: true,
  imports: [CommonModule, ButtonExitComponent, ModuloOnlyComponent],
  templateUrl: './table-voluntariation.component.html',
  styleUrl: './table-voluntariation.component.css',
})
export class TableVoluntariationComponent implements OnInit {
  cards: any[] = [];
  private apiUrl = 'http://localhost:4000/events/type/voluntarie';

  constructor(private http: HttpClient, private router: Router) {}

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
