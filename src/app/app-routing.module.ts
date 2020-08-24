import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

import { DevicesComponent } from './modules/device/devices/devices.component';
import { DevicesessionComponent } from './modules/device/devicesession/devicesession.component';
import { DevicelocationComponent } from './modules/device/devicelocation/devicelocation.component';
import { DevicemanagerComponent } from './modules/device/devicemanager/devicemanager.component';
import { DevicedriverComponent } from './modules/device/devicedriver/devicedriver.component';
import { PtodaComponent } from './modules/device/ptoda/ptoda.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent,
    }, { path: 'app-devices',
    component: DevicesComponent
    }, { path: 'app-devicedriver',
    component: DevicedriverComponent
    }, { path: 'app-devicelocation',
    component: DevicelocationComponent
    }, { path: 'app-devicemanager',
    component: DevicemanagerComponent
    }, { path: 'app-devicesession',
    component: DevicesessionComponent
    }, { path: 'app-ptoda',
    component: PtodaComponent
  }
],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
