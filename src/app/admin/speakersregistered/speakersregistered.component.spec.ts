import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersregisteredComponent } from './speakersregistered.component';

describe('SpeakersregisteredComponent', () => {
  let component: SpeakersregisteredComponent;
  let fixture: ComponentFixture<SpeakersregisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakersregisteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersregisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
