import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../modules/shared/components/header/header.component';

@Component({
  selector: 'app-reports-test',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './reports-test.component.html',
  styleUrl: './reports-test.component.css',
})
export class ReportsTestComponent {}
