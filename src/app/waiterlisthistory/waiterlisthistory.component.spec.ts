import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterlisthistoryComponent } from './waiterlisthistory.component';

describe('WaiterlisthistoryComponent', () => {
  let component: WaiterlisthistoryComponent;
  let fixture: ComponentFixture<WaiterlisthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiterlisthistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaiterlisthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
