import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-exit',
  standalone: true,
  imports: [],
  templateUrl: './button-exit.component.html',
  styleUrl: './button-exit.component.css',
})
export class ButtonExitComponent {
  @Input() routerPath = '';
  constructor(private router: Router) {}

  goToRoute() {
    if (this.routerPath) {
      this.router.navigate([this.routerPath]);
    }
  }
}
