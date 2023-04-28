import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorywaiterComponent } from './historywaiter.component';

describe('HistorywaiterComponent', () => {
  let component: HistorywaiterComponent;
  let fixture: ComponentFixture<HistorywaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorywaiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorywaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
