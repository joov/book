import { BmRedDirective } from './bm-red.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'sse-wze-mock-component',
  template: '<div sseWzeBmRed></div>',
})

class MockComponent {
}

fdescribe('A component with BmRedDirective', () => {
  let fixture: ComponentFixture<MockComponent>;
  let element: DebugElement;
  let sut: BmRedDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockComponent, BmRedDirective],
    });

    fixture = TestBed.createComponent(MockComponent);
    element = fixture.debugElement.query(By.directive(BmRedDirective));
    sut = element.injector.get(BmRedDirective);
  });

  describe('backgroundColor', () => {
    it('should default to red color', () => {
      expect(sut.backgroundColor).toBe('red');
    });

    it('should set background color of target element', () => {
      fixture.detectChanges();

      expect(element.nativeElement.style.backgroundColor).toBe('red');
    });
  });
});
