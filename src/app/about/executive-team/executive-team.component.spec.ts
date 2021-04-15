import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveTeamComponent } from './executive-team.component';

describe('ExecutiveTeamComponent', () => {
  let component: ExecutiveTeamComponent;
  let fixture: ComponentFixture<ExecutiveTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutiveTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
