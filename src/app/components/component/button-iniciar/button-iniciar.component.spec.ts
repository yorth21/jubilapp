import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIniciarComponent } from './button-iniciar.component';

describe('ButtonIniciarComponent', () => {
  let component: ButtonIniciarComponent;
  let fixture: ComponentFixture<ButtonIniciarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIniciarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIniciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
