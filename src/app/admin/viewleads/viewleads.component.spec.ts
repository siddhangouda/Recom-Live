import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewleadsComponent } from './viewleads.component';

describe('ViewleadsComponent', () => {
  let component: ViewleadsComponent;
  let fixture: ComponentFixture<ViewleadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewleadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
