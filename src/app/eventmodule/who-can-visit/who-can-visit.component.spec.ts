import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoCanVisitComponent } from './who-can-visit.component';

describe('WhoCanVisitComponent', () => {
  let component: WhoCanVisitComponent;
  let fixture: ComponentFixture<WhoCanVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoCanVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoCanVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
