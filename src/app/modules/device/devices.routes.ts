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
import { BatchpredictionComponent } from '../analytics/batchprediction/batchprediction.component';
import { MortalityanalyticsComponent } from '../analytics/mortalityanalytics/mortalityanalytics.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { LeadsComponent } from '../leads/leads.component';
import { PatientsComponent } from '../patients/patients.component';
import { AddpatientComponent } from '../patients/addpatient/addpatient.component';
import { EditpatientComponent } from '../patients/editpatient/editpatient.component';
import { PatientdetailComponent } from '../patients/patientdetail/patientdetail.component';

// import { adddevicesroutes } from './devices/adddevice/adddevice.routes';
// import { devicedetailsroutes } from './devices/devicedetails/devicedetails.routes';

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
    }, {
      path: 'app-mortalityanalysis',
      component: MortalityanalyticsComponent
    }, {
      path: 'app-batchprediction',
      component: BatchpredictionComponent
    }, {
      path: 'app-contacts',
      component: ContactsComponent
    }, {
      path: 'app-leads',
      component: LeadsComponent
    }, {
      path: 'app-patients',
      component: PatientsComponent
    }, {
      path: 'app-addpatient',
      component: AddpatientComponent
    }, {
      path: 'app-editpatient',
      component: EditpatientComponent
    }, {
      path: 'app-patientdetail',
      component: PatientdetailComponent
    }
];
