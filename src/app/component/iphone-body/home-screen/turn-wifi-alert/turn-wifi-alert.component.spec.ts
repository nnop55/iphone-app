import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnWifiAlertComponent } from './turn-wifi-alert.component';

describe('TurnWifiAlertComponent', () => {
  let component: TurnWifiAlertComponent;
  let fixture: ComponentFixture<TurnWifiAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnWifiAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnWifiAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
