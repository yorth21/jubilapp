import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloOnlyComponent } from './modulo-only.component';

describe('ModuloOnlyComponent', () => {
  let component: ModuloOnlyComponent;
  let fixture: ComponentFixture<ModuloOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloOnlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
