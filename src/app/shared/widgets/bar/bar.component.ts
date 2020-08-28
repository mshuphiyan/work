import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  @Input() label: String;
  @Input() total: String;
  @Input() percentage: String;

  constructor() { }

  Highcharts = Highcharts;
  chartOptions: {};

  ngOnInit(): void {
    this.chartOptions = {
      title: {
        text: 'Bar'
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    },

    series: [{
        type: 'column',
        colorByPoint: true,
        data: [29.9, 71.5, 106.4, 129.2, 344.0],
        showInLegend: false
    }]
  };
    HC_exporting(Highcharts);
  }

}
