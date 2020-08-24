import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicemanagerComponent } from './devicemanager.component';



@NgModule({
  declarations: [DevicemanagerComponent],
  imports: [
    CommonModule
  ],
  exports: [DevicemanagerComponent]
})
export class DevicemanagerModule { }
