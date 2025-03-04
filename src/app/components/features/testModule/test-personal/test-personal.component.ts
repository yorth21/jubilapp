import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../modules/shared/components/header/header.component';
import { FormPsychologicalComponent } from '../../../forms/form-psychological/form-psychological.component';

@Component({
  selector: 'app-test-personal',
  standalone: true,
  imports: [HeaderComponent, FormPsychologicalComponent],
  templateUrl: './test-personal.component.html',
  styleUrl: './test-personal.component.css',
})
export class TestPersonalComponent {}
