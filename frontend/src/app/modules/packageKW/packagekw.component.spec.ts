import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagekwComponent } from './packagekw.component';

describe('PackagekwComponent', () => {
  let component: PackagekwComponent;
  let fixture: ComponentFixture<PackagekwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagekwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagekwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
