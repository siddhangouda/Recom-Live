import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutheaderComponent } from './aboutheader.component';

describe('AboutheaderComponent', () => {
  let component: AboutheaderComponent;
  let fixture: ComponentFixture<AboutheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
