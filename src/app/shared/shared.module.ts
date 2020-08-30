import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { CardComponent } from './widgets/card/card.component';
import { BarComponent } from './widgets/bar/bar.component';
import { PieComponent } from './widgets/pie/pie.component';
import { ScatterComponent } from './widgets/scatter/scatter.component';
import { TimeseriesComponent } from './widgets/timeseries/timeseries.component';
import { BubblesComponent } from './widgets/bubbles/bubbles.component';
import { RadarComponent } from './widgets/radar/radar.component';
import { ChatboxComponent } from './widgets/chatbox/chatbox.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    BarComponent,
    PieComponent,
    ScatterComponent,
    TimeseriesComponent,
    BubblesComponent,
    RadarComponent,
    ChatboxComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    BarComponent,
    PieComponent,
    ScatterComponent,
    TimeseriesComponent,
    BubblesComponent,
    RadarComponent,
    ChatboxComponent
  ]
})


export class SharedModule { }
