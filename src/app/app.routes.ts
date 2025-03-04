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
import { ExploracionComponent } from './components/features/exploracion/exploracion.component';
import { RecommendedActivitiesComponent } from './components/features/recommended-activities/recommended-activities.component';
import { ChatBoxComponent } from './components/component/chat-box/chat-box.component';
import { ForumsComponent } from './components/features/iteractionModule/forums/forums.component';
import { ModuleIteractionsComponent } from './components/features/iteractionModule/module-iteractions/module-iteractions.component';
import { LiveActiviesComponent } from './components/features/iteractionModule/live-activies/live-activies.component';
import { MeetingInfoComponent } from './components/component/meeting-info/meeting-info.component';
import { PsicologyComponent } from './components/features/psicology/psicology.component';
import { ReportsTestComponent } from './components/features/testModule/reports-test/reports-test.component';
import { TestPersonalComponent } from './components/features/testModule/test-personal/test-personal.component';
import { ModuleTestComponent } from './components/features/testModule/module-test/module-test.component';

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
    path: 'psicologo',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
