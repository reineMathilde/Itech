import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisComponentComponent } from './analysis-component.component';

describe('AnalysisComponentComponent', () => {
  let component: AnalysisComponentComponent;
  let fixture: ComponentFixture<AnalysisComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalysisComponentComponent]
    });
    fixture = TestBed.createComponent(AnalysisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
