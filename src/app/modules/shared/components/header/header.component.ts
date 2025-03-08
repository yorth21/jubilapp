import { Component, Input } from '@angular/core';
import { IconJubilComponent } from '../../../../components/component/icon-jubil/icon-jubil.component';
import { MiPerfilComponent } from '../../../../components/component/mi-perfil/mi-perfil.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconJubilComponent, MiPerfilComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() exitRoute: string = '';
  @Input() titulo: String = '';

  constructor(private authService: AuthService, private router: Router) {}

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
  goToPerfil() {
    this.router.navigate(['/perfil']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirigir al login
  }
}
