import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconJubilComponent } from './icon-jubil.component';

describe('IconJubilComponent', () => {
  let component: IconJubilComponent;
  let fixture: ComponentFixture<IconJubilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconJubilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconJubilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
