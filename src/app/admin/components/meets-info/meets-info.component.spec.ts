import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetsInfoComponent } from './meets-info.component';

describe('MeetsInfoComponent', () => {
  let component: MeetsInfoComponent;
  let fixture: ComponentFixture<MeetsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetsInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
