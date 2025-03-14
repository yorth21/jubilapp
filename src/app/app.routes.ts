import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/features/home/home.component';
import { WelcomeComponent } from './components/features/welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { ModulosComponent } from './components/features/modulos/modulos.component';
import { PerfilComponent } from './components/features/perfil/perfil.component';
import { NgModule } from '@angular/core';
import { TestVocationalComponent } from './components/features/moduleOrientacion/test-vocational/test-vocational.component';
import { RecommendedActivitiesComponent } from './components/features/moduleOrientacion/recommended-activities/recommended-activities.component';

import { ForumsComponent } from './components/features/iteractionModule/forums/forums.component';
import { ModuleIteractionsComponent } from './components/features/iteractionModule/module-iteractions/module-iteractions.component';
import { LiveActiviesComponent } from './components/features/iteractionModule/live-activies/live-activies.component';

import { PsicologyComponent } from './components/features/psicology/psicology.component';
import { ReportsTestComponent } from './components/features/testModule/reports-test/reports-test.component';
import { TestPersonalComponent } from './components/features/testModule/test-personal/test-personal.component';
import { ModuleTestComponent } from './components/features/testModule/module-test/module-test.component';
import { LayoutComponent } from './layout/layout.component';
import { PruebaComponent } from './components/component/prueba/prueba.component';
import { ModuloOnlyComponent } from './components/component/modulo-only/modulo-only.component';
import { ModulosVocacionalComponent } from './components/features/moduleOrientacion/modulos-vocacional/modulos-vocacional.component';
import { ExploracionComponent } from './components/features/moduleOrientacion/exploracion/exploracion.component';
import { AuthGuard } from './guards/auth.guard';
import { TableEventsComponent } from './components/component/table-events/table-events.component';
import { TableActivitiesComponent } from './components/features/moduleOrientacion/exploracion/tables/table-activities/table-activities.component';
import { TableCoursesComponent } from './components/features/moduleOrientacion/exploracion/tables/table-courses/table-courses.component';
import { TableVoluntariationComponent } from './components/features/moduleOrientacion/exploracion/tables/table-voluntariation/table-voluntariation.component';

import { PostDetailsComponent } from './components/component/post-details/post-details.component';
import { UnauthorizedComponent } from './components/component/unauthorized/unauthorized.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ModulosComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'modules',
        component: ModulosComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'vocacional',
        component: ModulosVocacionalComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'test',
        component: TestVocationalComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'exploracion',
        component: ExploracionComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'recomendacion',
        component: RecommendedActivitiesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'foros',
        component: ForumsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'social',
        component: ModuleIteractionsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'actividades',
        component: LiveActiviesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'citas',
        component: PsicologyComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'reportes',
        component: ReportsTestComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'psicologicotest',
        component: TestPersonalComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'evaluaciones',
        component: ModuleTestComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'eventos',
        component: TableEventsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'tableactivities',
        component: TableActivitiesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'tablecourses',
        component: TableCoursesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'tablevoluntary',
        component: TableVoluntariationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'post/:id',
        component: PostDetailsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'admin',
        component: PruebaComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
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
    component: LoginComponent,
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
