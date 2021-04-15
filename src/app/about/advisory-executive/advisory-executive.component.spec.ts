import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryExecutiveComponent } from './advisory-executive.component';

describe('AdvisoryExecutiveComponent', () => {
  let component: AdvisoryExecutiveComponent;
  let fixture: ComponentFixture<AdvisoryExecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisoryExecutiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoryExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
