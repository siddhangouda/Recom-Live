import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationsClientsComponent } from './associations-clients.component';

describe('AssociationsClientsComponent', () => {
  let component: AssociationsClientsComponent;
  let fixture: ComponentFixture<AssociationsClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociationsClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
