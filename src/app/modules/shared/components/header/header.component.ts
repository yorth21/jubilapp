import { Component } from '@angular/core';
import { H1HeaderComponent } from '../../../../components/component/h1-header/h1-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [H1HeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
