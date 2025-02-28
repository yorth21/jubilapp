import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureTwoComponent } from './figure-two.component';

describe('FigureTwoComponent', () => {
  let component: FigureTwoComponent;
  let fixture: ComponentFixture<FigureTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FigureTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigureTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
