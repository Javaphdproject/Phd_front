import { Component, ViewChild } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRippleModule } from '@angular/material/core';
import { DashboardModule } from "../../dashboard/dashboard.module";
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexFill,
  ApexXAxis,
  ApexGrid,
  NgApexchartsModule
} from 'ng-apexcharts';
import { MatCardModule } from '@angular/material/card';


export interface activeusercardChartOptions {
  series: ApexAxisChartSeries;
  dataLabels: ApexDataLabels;
  chart: ApexChart;
  legend: ApexLegend;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  tooltip: ApexTooltip;
}
@Component({
  selector: 'app-ced',
  standalone: true,
  imports: [
    RouterModule,
    FeatherModule,
    MatSidenavModule,
    MatRippleModule,
    DashboardModule,
    MatCardModule,
    NgApexchartsModule
],
  templateUrl: './ced.component.html',
  styleUrl: './ced.component.scss'
})
export class CEDComponent {

  @ViewChild("activeusercardchart") chart1: ChartComponent = Object.create(null);
  public activeusercardChartOptions !: Partial<activeusercardChartOptions> | any;

  constructor() {
    // active users
    this.activeusercardChartOptions = {
      series: [
        {
          name: 'Ample Admin',
          data: [355, 390, 300, 350, 390, 180, 355, 390, 300, 350, 390, 180],
          color: "#fb9678",
        },
        {
          name: 'Pixel Admin',
          data: [280, 250, 325, 215, 250, 310, 280, 250, 325, 215, 250, 310],
          color: "#03c9d7",
        },
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
        height: 300,

      },
      legend: {
        show: false,
      },

      tooltip: {
        theme: "dark"
      },

      grid: {
        show: false,
      },

      dataLabels: {
        enabled: false,
      },

      stroke: {
        show: true,
        width: 5,
        colors: ['none']
      },

      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 8,
        },
      },
    }
  }

}
