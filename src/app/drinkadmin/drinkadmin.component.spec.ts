import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkadminComponent } from './drinkadmin.component';

describe('DrinkadminComponent', () => {
  let component: DrinkadminComponent;
  let fixture: ComponentFixture<DrinkadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
