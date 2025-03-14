import { Component } from '@angular/core';
import { FormPsychologicalComponent } from '../../../forms/form-psychological/form-psychological.component';
import { ButtonExitComponent } from '../../../component/button-exit/button-exit.component';

@Component({
  selector: 'app-test-personal',
  standalone: true,
  imports: [FormPsychologicalComponent, ButtonExitComponent],
  templateUrl: './test-personal.component.html',
  styleUrl: './test-personal.component.css',
})
export class TestPersonalComponent {}
