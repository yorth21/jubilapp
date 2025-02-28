import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVocationalComponent } from './test-vocational.component';

describe('TestVocationalComponent', () => {
  let component: TestVocationalComponent;
  let fixture: ComponentFixture<TestVocationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestVocationalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestVocationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
