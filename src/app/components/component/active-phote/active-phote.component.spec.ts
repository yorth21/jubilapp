import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePhoteComponent } from './active-phote.component';

describe('ActivePhoteComponent', () => {
  let component: ActivePhoteComponent;
  let fixture: ComponentFixture<ActivePhoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivePhoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivePhoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
