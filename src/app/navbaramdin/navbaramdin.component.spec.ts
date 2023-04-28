import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaramdinComponent } from './navbaramdin.component';

describe('NavbaramdinComponent', () => {
  let component: NavbaramdinComponent;
  let fixture: ComponentFixture<NavbaramdinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbaramdinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbaramdinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
