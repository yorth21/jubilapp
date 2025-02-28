import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/features/home/home.component';
import { WelcomeComponent } from './components/features/welcome/welcome.component';
import { IniciarSesionComponent } from './components/features/iniciar-sesion/iniciar-sesion.component';
import { RegisterComponent } from './components/features/register/register.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { ModulosComponent } from './components/features/modulos/modulos.component';
import { PerfilComponent } from './components/features/perfil/perfil.component';
import { NgModule } from '@angular/core';
import { ModulosVocacionalComponent } from './components/features/modulos-vocacional/modulos-vocacional.component';
import { TestVocationalComponent } from './components/features/test-vocational/test-vocational.component';

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
  {
    path: 'vocacional',
    component: ModulosVocacionalComponent,
  },
  {
    path: 'test',
    component: TestVocationalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
