import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Drilldown from 'highcharts/modules/drilldown';
import { DashBoardService } from "../../services/dashboard.service";
import { Options } from "highcharts";
Drilldown(Highcharts);
@Component({
  selector: 'app-drill-down-bar-charts',
  templateUrl: './drill-down-bar-charts.component.html',
  styleUrls: ['./drill-down-bar-charts.component.scss']
})
export class DrillDownBarChartsComponent{
  // title = 'myHighchart';
  // Highcharts: typeof Highcharts = Highcharts;
  // updateFlag = false;
  // test = [];
  // chart;
  // updateFromInput = false;
  // updateSubSystemFlag = false;
  // updateSubSystemFlagByName = false;
  // updateSubSystemForHostsFlagByName = false;
  // chartConstructor = "chart";
  // chartCallback;
  // selectedSubsystem: string = 'DB2';
  // selectedSubsystemForHost: string = 'DB2';

  // Subsystems = [];

  // subsystmeChartByNameOptions: Options = {
  //   chart: {
  //     type: 'column'
  //   },

  //   xAxis: {
  //     type: 'category'
  //   },
  //   title: {
  //     text: 'GEO WISE'
  //   },
  //   subtitle: {
  //     text: 'SubSystem Count'
  //   },
  //   tooltip: {
  //     headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
  //     pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
  //   },
  //   series: [],
  //   drilldown: {
  //     series: []
  //   }
  // }

  // subsystmeChartForHostsByNameOptions: Options = {
  //   chart: {
  //     type: 'column'
  //   },

  //   xAxis: {
  //     type: 'category'
  //   },
  //   title: {
  //     text: 'GEO WISE'
  //   },
  //   subtitle: {
  //     text: 'SubSystem Host Count'
  //   },
  //   tooltip: {
  //     headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
  //     pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
  //   },
  //   series: [],
  //   drilldown: {
  //     series: []
  //   }
  // }

  // constructor(private dashboardService: DashBoardService) {
  //   const self = this;
  //   this.chartCallback = chart => {
  //     self.chart = chart;
  //   };
  // }

  // ngOnInit() {
  //   let drilldown = [];
  //   let subsystemDrilldown = [];
  //   this.dashboardService.getSubSystemChartsByName('DB2').subscribe(res => {
  //     this.updateSubSystemDataByName(res.geoSeries);
  //   });
  //   this.dashboardService.getSubSystemHostsChartsByName('DB2').subscribe(res => {
  //     this.updateSubSystemDataHostWiseByName(res.geoSeries);
  //   });
  //   this.dashboardService.getSubSystemNames().subscribe(res => {
  //     this.Subsystems = res;
  //   });
  // }

  // onSubSystemSelection() {
  //   this.updateSubSystemFlagByName = false;
  //   this.dashboardService.getSubSystemChartsByName(this.selectedSubsystem).subscribe(res => {
  //     this.updateSubSystemDataByName(res.geoSeries);
  //   });
  // }

  // onSubSystemSelectionForHost() {
  //   this.updateSubSystemForHostsFlagByName = false;
  //   this.dashboardService.getSubSystemHostsChartsByName(this.selectedSubsystemForHost).subscribe(res => {
  //     this.updateSubSystemDataHostWiseByName(res.geoSeries);
  //   });
  // }

  // updateSubSystemDataByName(data) {
  //   this.subsystmeChartByNameOptions.series = data;
  //   this.updateSubSystemFlagByName = true;
  // }

  // updateSubSystemDataHostWiseByName(data) {
  //   this.subsystmeChartForHostsByNameOptions.series = data;
  //   this.updateSubSystemForHostsFlagByName = true;
  // }
}
