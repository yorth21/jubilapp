import { Component, OnInit } from '@angular/core';
import { MiPerfilComponent } from '../../component/mi-perfil/mi-perfil.component';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [MiPerfilComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent implements OnInit {
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
