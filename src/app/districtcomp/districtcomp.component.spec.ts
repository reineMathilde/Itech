import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictcompComponent } from './districtcomp.component';

describe('DistrictcompComponent', () => {
  let component: DistrictcompComponent;
  let fixture: ComponentFixture<DistrictcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistrictcompComponent]
    });
    fixture = TestBed.createComponent(DistrictcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
