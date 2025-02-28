import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-registre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-registre.component.html',
  styleUrl: './button-registre.component.css',
})
export class ButtonRegistreComponent {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/register']);
  }
}
