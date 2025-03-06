import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo-only',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modulo-only.component.html',
  styleUrl: './modulo-only.component.css',
})
export class ModuloOnlyComponent {
  constructor(private router: Router) {}
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
  @Input() link: string = '';
}
