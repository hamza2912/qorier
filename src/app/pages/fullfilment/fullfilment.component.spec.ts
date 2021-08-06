import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullfilmentComponent } from './fullfilment.component';

describe('FullfilmentComponent', () => {
  let component: FullfilmentComponent;
  let fixture: ComponentFixture<FullfilmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullfilmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullfilmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
