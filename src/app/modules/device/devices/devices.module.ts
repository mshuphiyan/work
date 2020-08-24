import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices.component';



@NgModule({
  declarations: [DevicesComponent],
  imports: [
    CommonModule
  ],
  exports: [DevicesComponent]
})
export class DevicesModule { }
