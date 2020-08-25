import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AgGridModule } from 'ag-grid-angular';

import { AddpatientModule } from './addpatient/addpatient.module';
import { PatientdetailModule } from './patientdetail/patientdetail.module';
import { EditpatientModule } from './editpatient/editpatient.module';

import { PatientsComponent } from './patients.component';
@NgModule({
  declarations: [PatientsComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    AgGridModule.withComponents([]),
    AddpatientModule,
    PatientdetailModule,
    EditpatientModule
  ],
  exports: [PatientsComponent]
})
export class PatientsModule { }
