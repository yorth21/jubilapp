import { Component } from '@angular/core';
import { QuestionaryService } from '../../../../services/questionary.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';
import { ButtonExitComponent } from '../../../component/button-exit/button-exit.component';

@Component({
  selector: 'app-reports-test',
  standalone: true,
  imports: [CommonModule, ButtonExitComponent],
  templateUrl: './reports-test.component.html',
  styleUrl: './reports-test.component.css',
})
export class ReportsTestComponent {
  user: any = {};
  results: any = null;

  constructor(
    private vocationalService: QuestionaryService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.getUserData().subscribe((userData) => {
      if (userData) {
        this.user = userData;

        // 📌 Si la identificación está disponible, hacer la llamada a la API
        if (this.user.identification) {
          this.getVocationalResponses(this.user.identification);
        }
      }
    });
  }

  getVocationalResponses(identification: string) {
    this.vocationalService.getByUser(identification).subscribe(
      (response) => {
        this.results = response;
        console.log('✅ Datos vocacionales:', this.results);
      },
      (error) => {
        console.error('❌ Error obteniendo los datos vocacionales:', error);
      }
    );
  }
}
