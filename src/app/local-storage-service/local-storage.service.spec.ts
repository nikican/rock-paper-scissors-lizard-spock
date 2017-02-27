/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';

import { Game, GameType } from '../model';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let localStorage: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
  });

  beforeEach(inject([LocalStorageService], lss => {
    localStorage = lss;
  }));

  it('should ...', () => {
    expect(localStorage).toBeTruthy();
  });

  it('should have saveGame method', () => {
    spyOn(localStorage, 'saveGame');

    localStorage.saveGame(GameType.HUMAN_VS_AI, new Game());

    expect(localStorage.saveGame).toHaveBeenCalled();
  });

  it('should have loadGame method', () => {
    spyOn(localStorage, 'loadGame');

    localStorage.loadGame(GameType.HUMAN_VS_AI);

    expect(localStorage.loadGame).toHaveBeenCalled();
  })

  it('should have saveActiveGame method', () => {
    spyOn(localStorage, 'saveActiveGame');

    localStorage.saveActiveGame(GameType.HUMAN_VS_AI);

    expect(localStorage.saveActiveGame).toHaveBeenCalled();
  });

  it('should have loadActiveGame method', () => {
    spyOn(localStorage, 'loadActiveGame');

    localStorage.loadActiveGame();

    expect(localStorage.loadActiveGame).toHaveBeenCalled();
  })
});


