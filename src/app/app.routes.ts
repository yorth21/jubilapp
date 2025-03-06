import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/features/home/home.component';
import { WelcomeComponent } from './components/features/welcome/welcome.component';
import { IniciarSesionComponent } from './auth/iniciar-sesion/iniciar-sesion.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { ModulosComponent } from './components/features/modulos/modulos.component';
import { PerfilComponent } from './components/features/perfil/perfil.component';
import { NgModule } from '@angular/core';
import { TestVocationalComponent } from './components/features/moduleOrientacion/test-vocational/test-vocational.component';
import { RecommendedActivitiesComponent } from './components/features/moduleOrientacion/recommended-activities/recommended-activities.component';
import { ChatBoxComponent } from './components/component/chat-box/chat-box.component';
import { ForumsComponent } from './components/features/iteractionModule/forums/forums.component';
import { ModuleIteractionsComponent } from './components/features/iteractionModule/module-iteractions/module-iteractions.component';
import { LiveActiviesComponent } from './components/features/iteractionModule/live-activies/live-activies.component';
import { MeetingInfoComponent } from './components/component/meeting-info/meeting-info.component';
import { PsicologyComponent } from './components/features/psicology/psicology.component';
import { ReportsTestComponent } from './components/features/testModule/reports-test/reports-test.component';
import { TestPersonalComponent } from './components/features/testModule/test-personal/test-personal.component';
import { ModuleTestComponent } from './components/features/testModule/module-test/module-test.component';
import { LayoutComponent } from './layout/layout.component';
import { PruebaComponent } from './components/component/prueba/prueba.component';
import { ModuloOnlyComponent } from './components/component/modulo-only/modulo-only.component';
import { ModulosVocacionalComponent } from './components/features/moduleOrientacion/modulos-vocacional/modulos-vocacional.component';
import { ExploracionComponent } from './components/features/moduleOrientacion/exploracion/exploracion.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ModulosComponent,
      },
      {
        path: 'vocacional',
        component: ModulosVocacionalComponent,
      },
      {
        path: 'perfil',
        component: PerfilComponent,
      },
      {
        path: 'test',
        component: TestVocationalComponent,
      },
      {
        path: 'exploracion',
        component: ExploracionComponent,
      },
      {
        path: 'recomendacion',
        component: RecommendedActivitiesComponent,
      },
      {
        path: 'foros',
        component: ForumsComponent,
      },
      {
        path: 'social',
        component: ModuleIteractionsComponent,
      },
      {
        path: 'actividades',
        component: LiveActiviesComponent,
      },
      {
        path: 'citas',
        component: PsicologyComponent,
      },
      {
        path: 'reportes',
        component: ReportsTestComponent,
      },
      {
        path: 'psicologicotest',
        component: TestPersonalComponent,
      },
      {
        path: 'evaluaciones',
        component: ModuleTestComponent,
      },
    ],
  },
  {
    path: 'prueba',
    component: PruebaComponent,
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
    path: 'card',
    component: ModuloOnlyComponent,
  },
  {
    path: '**', // Ruta comodín para manejar rutas no encontradas
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
