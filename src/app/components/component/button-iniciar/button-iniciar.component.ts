import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-iniciar',
  standalone: true,
  imports: [],
  templateUrl: './button-iniciar.component.html',
  styleUrl: './button-iniciar.component.css',
})
export class ButtonIniciarComponent {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
