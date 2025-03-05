import { Component, NgModule } from '@angular/core';
import { IconJubilComponent } from '../../components/component/icon-jubil/icon-jubil.component';
import { FormRegisterComponent } from '../../components/forms/form-register/form-register.component';

import { H1HeaderComponent } from '../../components/component/h1-header/h1-header.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    IconJubilComponent,
    FormRegisterComponent,
    H1HeaderComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {}
