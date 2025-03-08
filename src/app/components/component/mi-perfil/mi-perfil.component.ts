import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [],
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.css',
})
export class MiPerfilComponent {
  user: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUserData().subscribe((userData) => {
      if (userData) {
        this.user = userData;
      }
    });
  }
}
