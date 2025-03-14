import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  template: `
    <div class="unauthorized-container">
      <h2>Acceso Denegado</h2>
      <p>No tienes permiso para acceder a esta página.</p>
    </div>
  `,
  styles: [
    `
      .unauthorized-container {
        text-align: center;
        margin-top: 50px;
      }
    `,
  ],
})
export class UnauthorizedComponent {}
