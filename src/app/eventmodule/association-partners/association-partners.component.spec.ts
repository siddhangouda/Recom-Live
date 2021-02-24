import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationPartnersComponent } from './association-partners.component';

describe('AssociationPartnersComponent', () => {
  let component: AssociationPartnersComponent;
  let fixture: ComponentFixture<AssociationPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociationPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
