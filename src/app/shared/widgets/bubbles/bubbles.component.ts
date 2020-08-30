declare var require: any;
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
// import * as HighchartsMore from 'highcharts/highcharts-more';
require('highcharts/highcharts-more')(Highcharts);

// HighchartsMore(Highcharts);

@Component({
  selector: 'app-widgets-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.scss']
})
export class BubblesComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: {};

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy',
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
        gridLineWidth: 1,
        accessibility: {
            rangeDescription: 'Range: 0 to 100.'
        }
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        accessibility: {
            rangeDescription: 'Range: 0 to 100.'
        }
    },

    series: [{
        data: [
            [9, 81, 63],
            [98, 5, 89],
            [51, 50, 73],
            [41, 22, 14],
            [58, 24, 20],
            [78, 37, 34],
            [55, 56, 53],
            [18, 45, 70],
            [42, 44, 28],
            [3, 52, 59],
            [31, 18, 97],
            [79, 91, 63],
            [93, 23, 23],
            [44, 83, 22]
        ],
        marker: {
            fillColor: {
                radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                stops: [
                    [0, 'rgba(255,255,255,0.5)'],
                    [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get('rgba')]
                ]
            }
        }
    }, {
        data: [
            [42, 38, 20],
            [6, 18, 1],
            [1, 93, 55],
            [57, 2, 90],
            [80, 76, 22],
            [11, 74, 96],
            [88, 56, 10],
            [30, 47, 49],
            [57, 62, 98],
            [4, 16, 16],
            [46, 10, 11],
            [22, 87, 89],
            [57, 91, 82],
            [45, 15, 98]
        ],
        marker: {
            fillColor: {
                radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                stops: [
                    [0, 'rgba(255,255,255,0.5)'],
                    [1, Highcharts.color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get('rgba')]
                ]
            }
        }
    }]
  };
    HC_exporting(Highcharts);
  }

}
