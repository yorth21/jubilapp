import { Component } from '@angular/core';
import { HeaderComponent } from '../../../modules/shared/components/header/header.component';
import { IconJubilComponent } from '../icon-jubil/icon-jubil.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-active-phote',
  standalone: true,
  imports: [],
  templateUrl: './active-phote.component.html',
  styleUrl: './active-phote.component.css',
})
export class ActivePhoteComponent {
  backgroundImage = 'url("src/assets/img/background.svg")';
}
