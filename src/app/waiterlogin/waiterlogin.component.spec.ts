import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterloginComponent } from './waiterlogin.component';

describe('WaiterloginComponent', () => {
  let component: WaiterloginComponent;
  let fixture: ComponentFixture<WaiterloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiterloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaiterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
