import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { DevicelocationComponent } from './devicelocation/devicelocation.component';

export const devicesroutes: Routes = [{
  path: 'app-devices',
  component: DevicesComponent,
  children: [{
    path: 'app-devicelocation',
    component: DevicelocationComponent
  }]
}];
