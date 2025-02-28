import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRegistreComponent } from './button-registre.component';

describe('ButtonRegistreComponent', () => {
  let component: ButtonRegistreComponent;
  let fixture: ComponentFixture<ButtonRegistreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonRegistreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonRegistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
