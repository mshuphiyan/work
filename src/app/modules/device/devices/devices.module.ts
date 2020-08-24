import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { AgGridModule } from 'ag-grid-angular';

import { DevicesComponent } from './devices.component';


@NgModule({
  declarations: [DevicesComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    AgGridModule.withComponents([])
  ],
  exports: [DevicesComponent]
})
export class DevicesModule { }
