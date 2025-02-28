import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/features/home/home.component';
import { ModuloOnlyComponent } from './components/component/modulo-only/modulo-only.component';
import { ButtonExitComponent } from './components/component/button-exit/button-exit.component';
import { IconJubilComponent } from './components/component/icon-jubil/icon-jubil.component';
import { H1HeaderComponent } from './components/component/h1-header/h1-header.component';
import { ActivePhoteComponent } from './components/component/active-phote/active-phote.component';
import { WelcomeComponent } from './components/features/welcome/welcome.component';
import { IniciarSesionComponent } from './components/features/iniciar-sesion/iniciar-sesion.component';
import { RegisterComponent } from './components/features/register/register.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { ModulosComponent } from './components/features/modulos/modulos.component';
import { PerfilComponent } from './components/features/perfil/perfil.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: IniciarSesionComponent,
  },
  {
    path: 'inicio',
    component: WelcomeComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'modules',
    component: ModulosComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
