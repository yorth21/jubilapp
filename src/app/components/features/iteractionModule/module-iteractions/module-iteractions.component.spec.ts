import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleIteractionsComponent } from './module-iteractions.component';

describe('ModuleIteractionsComponent', () => {
  let component: ModuleIteractionsComponent;
  let fixture: ComponentFixture<ModuleIteractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleIteractionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleIteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
