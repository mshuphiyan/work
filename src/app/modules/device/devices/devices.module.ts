import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AgGridModule } from 'ag-grid-angular';

import { AdddeviceModule } from './adddevice/adddevice.module';
import { EditdeviceModule } from './editdevice/editdevice.module';
import { DevicedetailsModule } from './devicedetails/devicedetails.module';

import { DevicesComponent } from './devices.component';


@NgModule({
  declarations: [DevicesComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    AdddeviceModule,
    EditdeviceModule,
    DevicedetailsModule,
    AgGridModule.withComponents([])
  ],
  exports: [DevicesComponent]
})
export class DevicesModule { }
