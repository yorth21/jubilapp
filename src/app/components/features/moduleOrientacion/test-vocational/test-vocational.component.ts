import { Component } from '@angular/core';
import { FormVocationalComponent } from '../../../forms/form-vocational/form-vocational.component';
import { ButtonExitComponent } from '../../../component/button-exit/button-exit.component';

@Component({
  selector: 'app-test-vocational',
  standalone: true,
  imports: [FormVocationalComponent, ButtonExitComponent],
  templateUrl: './test-vocational.component.html',
  styleUrl: './test-vocational.component.css',
})
export class TestVocationalComponent {}
