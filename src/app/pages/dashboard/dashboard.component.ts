import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import Drilldown from 'highcharts/modules/drilldown';
import { DashBoardService } from "../../services/dashboard.service";
import { Options } from "highcharts";
import { AuthenticationService } from 'src/app/services/authentication.service';
Drilldown(Highcharts);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  title = 'myHighchart';
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;
  test = [];
  chart;
  updateFromInput = false;
  updateSubSystemFlag = false;
  updateSubSystemFlagByName = false;
  updateSubSystemForHostsFlagByName = false;
  chartConstructor = "chart";
  chartCallback;
  tracking_current = [];
  tracking_total = [];

  Subsystems = [];

  chartOptions: Options = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 5
      }
    },
    title: {
      text: 'GEO WISE'
    },
    subtitle: {
      text: 'HOST Count'
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
  subsystmeChartByNameOptions: Options = {
    chart: {
      type: 'column'
    },

    xAxis: {
      type: 'category'
    },
    title: {
      text: 'GEO WISE'
    },
    subtitle: {
      text: 'SubSystem Count'
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

  subsystmeChartForHostsByNameOptions: Options = {
    chart: {
      type: 'column'
    },

    xAxis: {
      type: 'category'
    },
    title: {
      text: 'GEO WISE'
    },
    subtitle: {
      text: 'SubSystem Host Count'
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
    // this.auth.handleUnAuthorizeException(null);
    // this.dashboardService.getDashBoard().subscribe(res => {
    //   this.updateData(res);
    // }, error => {
    //   this.auth.handleUnAuthorizeException(error.status);
    // });
  }

  clickUpdate(){
    this.dashboardService.getDashBoard().subscribe(res => {
      this.updateData(res);
    }, error => {
      this.auth.handleUnAuthorizeException(error.status);
    });
  }

  updateData(data) {
    this.tracking_current = data.tracking_current;
    this.tracking_total = data.tracking_total;
  }

}

