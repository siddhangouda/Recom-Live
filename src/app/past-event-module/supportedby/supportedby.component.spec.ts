import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportedbyComponent } from './supportedby.component';

describe('SupportedbyComponent', () => {
  let component: SupportedbyComponent;
  let fixture: ComponentFixture<SupportedbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportedbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportedbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
