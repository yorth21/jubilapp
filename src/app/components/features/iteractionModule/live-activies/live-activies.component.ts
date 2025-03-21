import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../../../../modules/shared/models/activity';
import { ModuloOnlyComponent } from '../../../component/modulo-only/modulo-only.component';
import { ButtonExitComponent } from '../../../component/button-exit/button-exit.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-live-activies',
  standalone: true,
  imports: [CommonModule, ModuloOnlyComponent, ButtonExitComponent],
  templateUrl: './live-activies.component.html',
  styleUrl: './live-activies.component.css',
})
export class LiveActiviesComponent implements OnInit {
  cards: any[] = [];
  private apiUrl = 'http://localhost:4000/events/type/activity';

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

  goToModule(route: string) {
    this.router.navigate([route]);
  }
}
