import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExitComponent } from './button-exit.component';

describe('ButtonExitComponent', () => {
  let component: ButtonExitComponent;
  let fixture: ComponentFixture<ButtonExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonExitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
