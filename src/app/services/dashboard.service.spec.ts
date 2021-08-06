import { TestBed } from '@angular/core/testing';

import { DashBoardService } from './dashboard.service';

describe('ScenarioBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashBoardService = TestBed.get(DashBoardService);
    expect(service).toBeTruthy();
  });
});
