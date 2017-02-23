/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
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
  }));
});
