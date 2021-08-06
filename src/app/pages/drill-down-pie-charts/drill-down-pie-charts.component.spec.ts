import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillDownPieChartsComponent } from './drill-down-pie-charts.component';

describe('DrillDownPieChartsComponent', () => {
  let component: DrillDownPieChartsComponent;
  let fixture: ComponentFixture<DrillDownPieChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillDownPieChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillDownPieChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
