import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { SharedModule } from '../../shared/shared.module';
import { DevicesModule } from '../../modules/device/devices/devices.module';
import { DevicedriverModule } from '../../modules/device/devicedriver/devicedriver.module';
import { DevicemanagerModule } from '../../modules/device/devicemanager/devicemanager.module';
import { DevicelocationModule } from '../../modules/device/devicelocation/devicelocation.module';
import { DevicesessionModule } from '../../modules/device/devicesession/devicesession.module';
import { PtodaModule } from '../../modules/device/ptoda/ptoda.module';

import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    SharedModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    DevicesModule,
    DevicedriverModule,
    DevicelocationModule,
    DevicemanagerModule,
    DevicesessionModule,
    PtodaModule
  ]
})
export class DefaultModule { }
