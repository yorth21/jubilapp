import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVoluntariationComponent } from './table-voluntariation.component';

describe('TableVoluntariationComponent', () => {
  let component: TableVoluntariationComponent;
  let fixture: ComponentFixture<TableVoluntariationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableVoluntariationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableVoluntariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
