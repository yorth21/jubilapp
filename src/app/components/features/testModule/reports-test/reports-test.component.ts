import { Component } from '@angular/core';
import { QuestionaryService } from '../../../../services/questionary.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-test.component.html',
  styleUrl: './reports-test.component.css',
})
export class ReportsTestComponent {
  results: any = null;

  constructor(private questionaryService: QuestionaryService) {}

  ngOnInit() {
    const identificacion =
      localStorage.getItem('identificacion') || '1231231231';

    this.questionaryService
      .getVocationalResponsesByUser(identificacion)
      .subscribe(
        (data) => {
          this.results = data || [];
        },
        (error) => {
          console.error('❌ Error al obtener respuestas:', error);
          this.results = [];
        }
      );
  }
}
