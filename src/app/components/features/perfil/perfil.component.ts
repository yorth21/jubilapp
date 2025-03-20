import { Component, OnInit } from '@angular/core';
import { MiPerfilComponent } from '../../component/mi-perfil/mi-perfil.component';

import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [MiPerfilComponent, CommonModule, RouterModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent implements OnInit {
  isAdmin: boolean = false;
  user: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUserData().subscribe((userData) => {
      if (userData) {
        this.user = userData;
      }
    });
    this.isAdmin = this.authService.isAdmin();
  }
}
