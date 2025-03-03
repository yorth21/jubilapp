import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMeetComponent } from './form-meet.component';

describe('FormMeetComponent', () => {
  let component: FormMeetComponent;
  let fixture: ComponentFixture<FormMeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMeetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
