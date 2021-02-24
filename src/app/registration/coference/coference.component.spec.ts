import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoferenceComponent } from './coference.component';

describe('CoferenceComponent', () => {
  let component: CoferenceComponent;
  let fixture: ComponentFixture<CoferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
