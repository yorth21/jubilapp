import { Component, Input } from '@angular/core';
import { Module } from '../../../modules/shared/models/module';

@Component({
  selector: 'app-modulo-only',
  standalone: true,
  imports: [],
  templateUrl: './modulo-only.component.html',
  styleUrl: './modulo-only.component.css',
})
export class ModuloOnlyComponent {
  @Input({ required: true }) module!: Module;
}
