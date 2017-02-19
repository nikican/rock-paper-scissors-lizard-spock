/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService]
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

    appService.initHumanVSAIgame();

    expect(appService.humanVsAIgame).toBeTruthy;
  });

  it('shouould create AI vs AI game', () => {
    expect(appService.AIvsAIgame).toBeNull;

    appService.initAIvsAIgame();

    expect(appService.AIvsAIgame).toBeTruthy;
  });
});
