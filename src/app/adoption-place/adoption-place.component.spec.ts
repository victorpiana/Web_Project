import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionPlaceComponent } from './adoption-place.component';

describe('AdoptionPlaceComponent', () => {
  let component: AdoptionPlaceComponent;
  let fixture: ComponentFixture<AdoptionPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
