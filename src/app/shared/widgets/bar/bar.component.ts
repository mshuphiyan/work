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
      chart: {
        height: 160,
      },
      title: {
          text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
          split: true,
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
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
