import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologyComponent } from './psicology.component';

describe('PsicologyComponent', () => {
  let component: PsicologyComponent;
  let fixture: ComponentFixture<PsicologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsicologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsicologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
