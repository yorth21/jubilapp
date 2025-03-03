import { Component, NgModule } from '@angular/core';
import { HeaderComponent } from '../../../modules/shared/components/header/header.component';
import { IconJubilComponent } from '../../component/icon-jubil/icon-jubil.component';
import { FormRegisterComponent } from '../../forms/form-register/form-register.component';
import { ButtonRegistreComponent } from '../../component/button-registre/button-registre.component';
import { H1HeaderComponent } from '../../component/h1-header/h1-header.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    IconJubilComponent,
    FormRegisterComponent,
    ButtonRegistreComponent,
    H1HeaderComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {}
