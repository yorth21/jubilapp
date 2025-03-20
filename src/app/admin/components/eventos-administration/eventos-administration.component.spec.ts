import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosAdministrationComponent } from './eventos-administration.component';

describe('EventosAdministrationComponent', () => {
  let component: EventosAdministrationComponent;
  let fixture: ComponentFixture<EventosAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosAdministrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
