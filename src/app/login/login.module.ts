import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
