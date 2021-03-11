import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastheaderComponent } from './pastheader.component';

describe('PastheaderComponent', () => {
  let component: PastheaderComponent;
  let fixture: ComponentFixture<PastheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
