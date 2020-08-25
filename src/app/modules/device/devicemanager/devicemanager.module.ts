import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { AgGridModule } from 'ag-grid-angular';

import { AdddevicemanagerModule } from './adddevicemanager/adddevicemanager.module';
import { EditdevicemanagerModule } from './editdevicemanager/editdevicemanager.module';

import { DevicemanagerComponent } from './devicemanager.component';
@NgModule({
  declarations: [DevicemanagerComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    AdddevicemanagerModule,
    EditdevicemanagerModule,
    AgGridModule.withComponents([])
  ],
  exports: [DevicemanagerComponent]
})
export class DevicemanagerModule { }
