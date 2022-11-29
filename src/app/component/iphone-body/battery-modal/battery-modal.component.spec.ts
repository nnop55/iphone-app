import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryModalComponent } from './battery-modal.component';

describe('BatteryModalComponent', () => {
  let component: BatteryModalComponent;
  let fixture: ComponentFixture<BatteryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteryModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatteryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
