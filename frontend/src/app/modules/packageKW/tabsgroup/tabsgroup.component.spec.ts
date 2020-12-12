import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsgroupComponent } from './tabsgroup.component';

describe('TabsgroupComponent', () => {
  let component: TabsgroupComponent;
  let fixture: ComponentFixture<TabsgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
