import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCustomizationComponent } from './business-customization.component';

describe('BusinessCustomizationComponent', () => {
  let component: BusinessCustomizationComponent;
  let fixture: ComponentFixture<BusinessCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessCustomizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
