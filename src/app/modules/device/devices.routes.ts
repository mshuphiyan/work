import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { DevicedetailsComponent } from './devices/devicedetails/devicedetails.component';
import { AdddeviceComponent } from './devices/adddevice/adddevice.component';
import { EditdeviceComponent } from './devices/editdevice/editdevice.component';
import { DevicelocationComponent } from '../device/devicelocation/devicelocation.component';
import { DevicedriverComponent } from '../device/devicedriver/devicedriver.component';
import { DevicemanagerComponent } from '../device/devicemanager/devicemanager.component';
import { DevicesessionComponent } from '../device/devicesession/devicesession.component';
import { PtodaComponent } from '../device/ptoda/ptoda.component';

import { adddevicesroutes } from './devices/adddevice/adddevice.routes';
import { devicedetailsroutes } from './devices/devicedetails/devicedetails.routes';

export const devicesroutes: Routes = [{
    path: 'app-devices',
    component: DevicesComponent,
    }, {
    path: 'app-adddevice',
    component: AdddeviceComponent
    }, {
    path: 'app-devicedetails',
    component: DevicedetailsComponent
    }, {
    path: 'app-editdevice',
    component: EditdeviceComponent
    }, {
      path: 'app-devicelocation',
      component: DevicelocationComponent
    }, {
      path: 'app-devicedriver',
      component: DevicedriverComponent
    }, {
      path: 'app-devicemanager',
      component: DevicemanagerComponent
    }, {
      path: 'app-devicesession',
      component: DevicesessionComponent
    }, {
      path: 'app-ptoda',
      component: PtodaComponent
    }
];
