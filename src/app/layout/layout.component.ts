import { Component } from '@angular/core';
import { HeaderComponent } from '../modules/shared/components/header/header.component';
import { FooterComponent } from '../modules/shared/components/footer/footer.component';
import { ModulosComponent } from '../components/features/modulos/modulos.component';
import { PruebaComponent } from '../components/component/prueba/prueba.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
