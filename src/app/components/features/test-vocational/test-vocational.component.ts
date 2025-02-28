import { Component } from '@angular/core';
import { HeaderComponent } from '../../../modules/shared/components/header/header.component';
import { FormVocationalComponent } from '../../forms/form-vocational/form-vocational.component';

@Component({
  selector: 'app-test-vocational',
  standalone: true,
  imports: [HeaderComponent, FormVocationalComponent],
  templateUrl: './test-vocational.component.html',
  styleUrl: './test-vocational.component.css',
})
export class TestVocationalComponent {}
