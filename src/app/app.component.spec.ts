/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppService } from './app.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let appService: AppService;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [AppService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Human vs AI button', () => {
    beforeEach(() => {
      debugElement = fixture.debugElement.query(By.css('#HvsA'));
      element = debugElement.nativeElement;
    });

    it('should have link \'Human vs AI\'', () => {
      expect(element.textContent).toContain('Human vs AI');
    });

    it('should call \'playHumanVSAIgame\' method on click', () => {
      spyOn(component, 'playHumanVSAIgame');

      debugElement.triggerEventHandler('click', null);
      expect(component.playHumanVSAIgame).toHaveBeenCalled();
    });
  });

  describe('AI vs AI button', () => {
    beforeEach(() => {
      debugElement = fixture.debugElement.query(By.css('#AvsA'));
      element = debugElement.nativeElement;
    });

    it('should have \'AI vs AI\' text', () => {
      expect(element.textContent).toContain('AI vs AI');
    });

    it('should call \'playAIvsAIgame\' method on click', () => {
      spyOn(component, 'playAIvsAIgame');

      debugElement.triggerEventHandler('click', null);
      expect(component.playAIvsAIgame).toHaveBeenCalled();
    });
  });
});
