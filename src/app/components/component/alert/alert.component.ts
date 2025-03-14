import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  @Input() message: string = 'Alerta!';
  @Input() type: 'success' | 'error' | 'warning' | 'info' = 'info';
  show: boolean = true;

  closeAlert() {
    this.show = false;
  }
}
