import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefugeListComponent } from './refuge-list.component';

describe('RefugeListComponent', () => {
  let component: RefugeListComponent;
  let fixture: ComponentFixture<RefugeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefugeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefugeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
