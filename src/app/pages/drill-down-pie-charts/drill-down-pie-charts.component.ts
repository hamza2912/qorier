import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Drilldown from 'highcharts/modules/drilldown';
import { DashBoardService } from "../../services/dashboard.service";
import { Options } from "highcharts";
import { AuthenticationService } from 'src/app/services/authentication.service';
Drilldown(Highcharts);
@Component({
  selector: 'app-drill-down-pie-charts',
  templateUrl: './drill-down-pie-charts.component.html',
  styleUrls: ['./drill-down-pie-charts.component.scss']
})
export class DrillDownPieChartsComponent {

  title = 'myHighchart';
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;
  test = [];
  chart;
  updateFromInput = false;
  updateSubSystemFlag = false;
  chartConstructor = "chart";
  chartCallback;
  selectedYear = "2020";
  Subsystems = [];
  showNoDataMessage: boolean = true;
  Years = [
    { value: '2020', viewValue: '2020' },
    { value: '2021', viewValue: '2021' },
    { value: '2022', viewValue: '2022' },
    { value: '2023', viewValue: '2023' },
    { value: '2024', viewValue: '2024' },
    { value: '2025', viewValue: '2025' },
    { value: '2026', viewValue: '2026' },
    { value: '2027', viewValue: '2027' },
    { value: '2028', viewValue: '2028' },
    { value: '2029', viewValue: '2029' },
    { value: '2030', viewValue: '2030' },
    { value: '2031', viewValue: '2031' },
    { value: '2032', viewValue: '2032' },
    { value: '2033', viewValue: '2033' },
    { value: '2034', viewValue: '2034' },
    { value: '2035', viewValue: '2035' },
    { value: '2036', viewValue: '2036' },
    { value: '2037', viewValue: '2037' },
    { value: '2038', viewValue: '2038' },
    { value: '2039', viewValue: '2039' },
    { value: '2040', viewValue: '2040' },
    { value: '2041', viewValue: '2041' },
    { value: '2042', viewValue: '2042' },
    { value: '2043', viewValue: '2043' },
    { value: '2044', viewValue: '2044' },
    { value: '2045', viewValue: '2045' },
    { value: '2046', viewValue: '2046' },
    { value: '2047', viewValue: '2047' },
    { value: '2048', viewValue: '2048' },
    { value: '2049', viewValue: '2049' },
    { value: '2050', viewValue: '2050' }
  ];
  chartOptions: Options = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 5
      }
    },
    title: {
      text: 'MONTH WISE'
    },
    subtitle: {
      text: 'packges Count'
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
    },
    series: [],
    drilldown: {
      series: []
    }
  }

  subsystmeChartOptions: Options = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45
      }
    },
    title: {
      text: 'GEO WISE'
    },
    subtitle: {
      text: 'SubSystem Count'
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
    },
    series: [],
    drilldown: {
      series: []
    }
  }

  constructor(private dashboardService: DashBoardService, private auth: AuthenticationService) {
    const self = this;
    this.chartCallback = chart => {
      self.chart = chart;
    };
  }

  ngOnInit() {
    this.auth.handleUnAuthorizeException(null);
    let drilldown = [];
    this.dashboardService.getSubSystemCharts("2020").subscribe(res => {
      if (res.drilldown.length > 0) {
        this.showNoDataMessage = false;
      }
      else {
        this.showNoDataMessage = true;
      }
      drilldown = [...drilldown, ...res.drilldown]
      this.updateSubSystemData(res.series, drilldown);
    }, error => {
      this.auth.handleUnAuthorizeException(error.status);
    });
  }

  updateSubSystemData(data, drilldown) {
    this.chartOptions.series = data;
    this.chartOptions.drilldown.series = drilldown;
    this.updateFlag = true;
  }

  onYearSelection() {
    let drilldown = [];
    this.dashboardService.getSubSystemCharts(this.selectedYear).subscribe(res => {
      if (res.drilldown.length > 0) {
        this.showNoDataMessage = false;
      }
      else {
        this.showNoDataMessage = true;
      }
      drilldown = [...drilldown, ...res.drilldown]
      this.updateSubSystemData(res.series, drilldown);
    }, error => {
      this.auth.handleUnAuthorizeException(error.status);
    });
  }

}
