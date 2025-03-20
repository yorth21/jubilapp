import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { adminGuard } from '../guards/admin.guard';
import { EventosAdministrationComponent } from './components/eventos-administration/eventos-administration.component';
import { AuthGuard } from '../guards/auth.guard';

import { MeetsInfoComponent } from './components/meets-info/meets-info.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard, adminGuard],
    children: [
      { path: 'events_admin', component: EventosAdministrationComponent },
      { path: 'meets_admin', component: MeetsInfoComponent },
      { path: '', redirectTo: 'meets_admin', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
