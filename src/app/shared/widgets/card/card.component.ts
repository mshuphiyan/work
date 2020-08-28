import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label: String;
  @Input() total: String;
  @Input() percentage: String;

  constructor() { }
  Highcharts = Highcharts;
  chartOptions: {};

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area',
          backgroundColor: null,
          borderWidth: 0,
          margin: [2,2,2,2],
          height: 150,
      },
      title: {
          text: 'Active Devices'
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
        labels: {
          enabled: false,
        },
        title: {
          text: null
        }
      },
      series: [{
          data: [2, 2, 2, 6, 13, 30, 46]
      }]
  };

    HC_exporting(Highcharts);
  }

}
