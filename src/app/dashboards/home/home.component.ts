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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lineChart1: Chart = {
    type: 'Line',
    data: data['LineWithArea'],
    options: {
      low: 0,
      showArea: true,
      fullWidth: true    
    }
};

    // PolarArea
    public polarAreaChartLabels: string[] = [
      'Download Sales',
      'In-Store Sales',
      'Mail Sales',
      'Telesales',
      'Corporate Sales'
  ];
  public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
  public polarAreaLegend: boolean = true;

  public polarAreaChartType: string = 'polarArea';


  constructor() { }

  ngOnInit() {
  }

}
