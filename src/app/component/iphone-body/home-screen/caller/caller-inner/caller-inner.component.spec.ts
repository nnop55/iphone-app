import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallerInnerComponent } from './caller-inner.component';

describe('CallerInnerComponent', () => {
  let component: CallerInnerComponent;
  let fixture: ComponentFixture<CallerInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallerInnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallerInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
