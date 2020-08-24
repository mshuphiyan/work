import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { devicesroutes } from './modules/device/devices.routes';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
    },
    ...devicesroutes
  ]
}];
