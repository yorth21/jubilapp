import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsTestComponent } from './reports-test.component';

describe('ReportsTestComponent', () => {
  let component: ReportsTestComponent;
  let fixture: ComponentFixture<ReportsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
