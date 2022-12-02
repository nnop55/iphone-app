import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickMortyInnerComponent } from './rick-morty-inner.component';

describe('RickMortyInnerComponent', () => {
  let component: RickMortyInnerComponent;
  let fixture: ComponentFixture<RickMortyInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickMortyInnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickMortyInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
