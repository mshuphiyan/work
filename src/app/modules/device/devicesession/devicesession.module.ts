import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AgGridModule } from 'ag-grid-angular';

import { DevicesessionComponent } from './devicesession.component';

@NgModule({
  declarations: [DevicesessionComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    AgGridModule.withComponents([])
  ],
  exports: [DevicesessionComponent]
})
export class DevicesessionModule { }
