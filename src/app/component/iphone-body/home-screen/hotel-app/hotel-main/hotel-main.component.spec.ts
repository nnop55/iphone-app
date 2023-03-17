import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelMainComponent } from './hotel-main.component';

describe('HotelMainComponent', () => {
  let component: HotelMainComponent;
  let fixture: ComponentFixture<HotelMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
