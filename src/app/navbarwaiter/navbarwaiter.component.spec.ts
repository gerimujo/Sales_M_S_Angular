import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarwaiterComponent } from './navbarwaiter.component';

describe('NavbarwaiterComponent', () => {
  let component: NavbarwaiterComponent;
  let fixture: ComponentFixture<NavbarwaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarwaiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarwaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
