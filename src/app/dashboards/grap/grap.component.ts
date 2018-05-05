import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist/dist/chartist.component";

declare var require: any;

const data: any = require('./data.json');

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'app-grap',
  templateUrl: './grap.component.html',
  styleUrls: ['./grap.component.scss']
})
export class GrapComponent implements OnInit {

  lineChart1: Chart = {
    type: 'Line',
    data: data['LineWithArea'],
    options: {
      low: 0,
      showArea: true,
      fullWidth: true    
    }
};

  constructor() { }

  ngOnInit() {
  }

}
