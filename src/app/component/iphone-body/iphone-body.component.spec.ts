import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneBodyComponent } from './iphone-body.component';

describe('IphoneBodyComponent', () => {
  let component: IphoneBodyComponent;
  let fixture: ComponentFixture<IphoneBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IphoneBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IphoneBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
