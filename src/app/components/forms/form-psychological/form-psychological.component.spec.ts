import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPsychologicalComponent } from './form-psychological.component';

describe('FormPsychologicalComponent', () => {
  let component: FormPsychologicalComponent;
  let fixture: ComponentFixture<FormPsychologicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPsychologicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPsychologicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
