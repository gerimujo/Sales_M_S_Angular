import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterdayadminComponent } from './waiterdayadmin.component';

describe('WaiterdayadminComponent', () => {
  let component: WaiterdayadminComponent;
  let fixture: ComponentFixture<WaiterdayadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiterdayadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaiterdayadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
