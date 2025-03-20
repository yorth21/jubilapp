import { Component, Input } from '@angular/core';

import { MiPerfilComponent } from '../../../../components/component/mi-perfil/mi-perfil.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MiPerfilComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isaAuthenticated: boolean = false;
  isAdmin: boolean = false;
  @Input() exitRoute: string = '';
  @Input() titulo: String = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isAuthenticated().subscribe((authStatus: boolean) => {
      this.isaAuthenticated = authStatus;
    });
  }
  goToPerfil() {
    this.router.navigate(['/perfil']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirigir al login
  }
}
