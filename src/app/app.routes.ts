import { Routes } from '@angular/router';
import { HomeComponent } from './components/features/home/home.component';
import { ModuloOnlyComponent } from './components/component/modulo-only/modulo-only.component';
import { ButtonExitComponent } from './components/component/button-exit/button-exit.component';
import { IconJubilComponent } from './components/component/icon-jubil/icon-jubil.component';
import { H1HeaderComponent } from './components/component/h1-header/h1-header.component';
import { ActivePhoteComponent } from './components/component/active-phote/active-phote.component';
import { WelcomeComponent } from './components/features/welcome/welcome.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: WelcomeComponent,
  },
];
