import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryboardComponent } from './advisoryboard.component';

describe('AdvisoryboardComponent', () => {
  let component: AdvisoryboardComponent;
  let fixture: ComponentFixture<AdvisoryboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisoryboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoryboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
