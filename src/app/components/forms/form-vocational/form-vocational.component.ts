import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-form-vocational',
  standalone: true,
  imports: [BrowserModule, ReactiveFormsModule],
  templateUrl: './form-vocational.component.html',
  styleUrl: './form-vocational.component.css',
})
export class FormVocationalComponent {}
