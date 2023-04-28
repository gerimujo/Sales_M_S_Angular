import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomewaiterComponent } from './homewaiter.component';

describe('HomewaiterComponent', () => {
  let component: HomewaiterComponent;
  let fixture: ComponentFixture<HomewaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomewaiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomewaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
