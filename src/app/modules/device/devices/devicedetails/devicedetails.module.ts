import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { DevicedetailsComponent } from './devicedetails.component';
@NgModule({
  declarations: [DevicedetailsComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  exports: [DevicedetailsComponent]
})
export class DevicedetailsModule { }
