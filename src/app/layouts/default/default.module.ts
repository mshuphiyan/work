import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SharedModule } from '../../shared/shared.module';

import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { PostComponent } from '../../modules/post/post.component';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    SharedModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule
  ]
})
export class DefaultModule { }
