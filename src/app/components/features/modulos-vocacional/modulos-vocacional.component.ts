import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../../modules/shared/components/header/header.component';
import { ModuloOnlyComponent } from '../../component/modulo-only/modulo-only.component';
import { Module } from '../../../modules/shared/models/module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modulos-vocacional',
  standalone: true,
  imports: [HeaderComponent, ModuloOnlyComponent, CommonModule],
  templateUrl: './modulos-vocacional.component.html',
  styleUrl: './modulos-vocacional.component.css',
})
export class ModulosVocacionalComponent {
  constructor() {
    const initModules: Module[] = [
      {
        name: 'PRUEBA VOCACIONAL',
        img: 'https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png',
        route: '',
      },
      {
        name: 'RECURSOS DE EXPLORACION LABORAL',
        img: 'https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png',
        route: '',
      },
      {
        name: 'GUIAS DE ACTIVIDADES RECOMENDADAS',
        img: 'https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png',
        route: '',
      },
    ];
    this.modules.set(initModules);
  }
  modules = signal<Module[]>([]);
}
