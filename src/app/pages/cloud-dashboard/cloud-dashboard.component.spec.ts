import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudDashboardComponent } from './cloud-dashboard.component';

describe('CloudDashboardComponent', () => {
  let component: CloudDashboardComponent;
  let fixture: ComponentFixture<CloudDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
