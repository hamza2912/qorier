import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillDownBarChartsComponent } from './drill-down-bar-charts.component';

describe('DrillDownBarChartsComponent', () => {
  let component: DrillDownBarChartsComponent;
  let fixture: ComponentFixture<DrillDownBarChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillDownBarChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillDownBarChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
