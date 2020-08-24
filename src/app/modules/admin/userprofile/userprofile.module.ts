import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { UserprofileComponent } from './userprofile.component';

@NgModule({
  declarations: [UserprofileComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [UserprofileComponent]
})
export class UserprofileModule { }
