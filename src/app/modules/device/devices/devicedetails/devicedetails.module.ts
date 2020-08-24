import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicedetailsComponent } from './devicedetails.component';



@NgModule({
  declarations: [DevicedetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [DevicedetailsComponent]
})
export class DevicedetailsModule { }
