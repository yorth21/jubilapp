import { Component } from '@angular/core';
import { QuestionaryService } from '../../../../services/questionary.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';
import { ButtonExitComponent } from '../../../component/button-exit/button-exit.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  psychResults: any = null;

  constructor(
    private vocationalService: QuestionaryService,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.authService.getUserData().subscribe((userData) => {
      if (userData) {
        this.user = userData;

        if (this.user.identification) {
          this.getVocationalResponses(this.user.identification);
        }
        this.getPsychologicalResponses();
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
  getPsychologicalResponses() {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http
      .get('http://localhost:4000/psychological-responses/my-results', {
        headers,
      })
      .subscribe(
        (response) => {
          this.psychResults = response;
          console.log('✅ Datos psicológicos:', this.psychResults);
        },
        (error) => {
          console.error('❌ Error obteniendo los datos psicológicos:', error);
        }
      );
  }
}
