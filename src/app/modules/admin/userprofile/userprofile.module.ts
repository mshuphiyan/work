import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';

import { UserprofileComponent } from './userprofile.component';

@NgModule({
  declarations: [UserprofileComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [UserprofileComponent]
})
export class UserprofileModule { }
