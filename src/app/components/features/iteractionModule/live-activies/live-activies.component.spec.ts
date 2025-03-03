import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveActiviesComponent } from './live-activies.component';

describe('LiveActiviesComponent', () => {
  let component: LiveActiviesComponent;
  let fixture: ComponentFixture<LiveActiviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveActiviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveActiviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
