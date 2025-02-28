import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosVocacionalComponent } from './modulos-vocacional.component';

describe('ModulosVocacionalComponent', () => {
  let component: ModulosVocacionalComponent;
  let fixture: ComponentFixture<ModulosVocacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulosVocacionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulosVocacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
