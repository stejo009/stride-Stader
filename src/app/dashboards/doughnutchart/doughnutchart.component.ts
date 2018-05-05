import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styleUrls: ['./doughnutchart.component.scss']
})
export class DoughnutchartComponent implements OnInit {
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales'
];
public doughnutChartData: number[] = [350, 450, 100];
public doughnutChartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
