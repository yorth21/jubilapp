import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../../modules/shared/components/header/header.component';
import { ModuloOnlyComponent } from '../../component/modulo-only/modulo-only.component';
import { Module } from '../../../modules/shared/models/module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modulos',
  standalone: true,
  imports: [HeaderComponent, ModuloOnlyComponent, CommonModule],
  templateUrl: './modulos.component.html',
  styleUrl: './modulos.component.css',
})
export class ModulosComponent {
  constructor() {
    const initModules: Module[] = [
      {
        name: 'MODULO DE ORIENTACION VOCACIONAL',
        img: 'https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png',
      },
      {
        name: 'MODULO DE INTERACCION SOCIAL',
        img: 'https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png',
      },
      {
        name: 'MODULO DE EVALUACION PERSONALIZADAS',
        img: 'https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png',
      },
      {
        name: 'MODULO PSICOLOGICA',
        img: 'https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png',
      },
    ];
    this.modules.set(initModules);
  }
  modules = signal<Module[]>([]);
}
