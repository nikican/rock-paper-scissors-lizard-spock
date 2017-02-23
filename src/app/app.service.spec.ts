/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';

import { AppService } from './app.service';
import { LocalStorageService } from './local-storage-service/local-storage.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService, LocalStorageService]
    });
  });

  beforeEach(inject([AppService], aps => {
    appService = aps;
  }));

  it('should exist', () => {
    expect(appService).toBeTruthy();
  });

  it('should create human vs AI game', () => {
    expect(appService.humanVsAIgame).toBeNull;

    appService.createHumanVsAIgame();

    expect(appService.humanVsAIgame).toBeTruthy;
  });

  it('shouould create AI vs AI game', () => {
    expect(appService.AIvsAIgame).toBeNull;

    appService.createAIvsAIgame();

    expect(appService.createAIvsAIgame).toBeTruthy;
  });
});
