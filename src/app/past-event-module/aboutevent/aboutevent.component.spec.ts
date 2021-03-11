import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouteventComponent } from './aboutevent.component';

describe('AbouteventComponent', () => {
  let component: AbouteventComponent;
  let fixture: ComponentFixture<AbouteventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbouteventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouteventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
