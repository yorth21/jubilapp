import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVocationalComponent } from './form-vocational.component';

describe('FormVocationalComponent', () => {
  let component: FormVocationalComponent;
  let fixture: ComponentFixture<FormVocationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormVocationalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVocationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
