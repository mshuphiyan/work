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

import { AdddevicelocationModule } from './adddevicelocation/adddevicelocation.module';
import { EditdevicelocationModule } from './editdevicelocation/editdevicelocation.module';

import { DevicelocationComponent } from './devicelocation.component';

@NgModule({
  declarations: [DevicelocationComponent],
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
    AdddevicelocationModule,
    EditdevicelocationModule,
    AgGridModule.withComponents([])
  ],
  exports: [DevicelocationComponent]
})
export class DevicelocationModule { }
