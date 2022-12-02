import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarutoComponent } from './naruto.component';

describe('NarutoComponent', () => {
  let component: NarutoComponent;
  let fixture: ComponentFixture<NarutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NarutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
