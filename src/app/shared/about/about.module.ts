import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { AboutComponent } from './about.component';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
