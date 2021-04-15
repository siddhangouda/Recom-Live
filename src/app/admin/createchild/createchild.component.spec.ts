import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatechildComponent } from './createchild.component';

describe('CreatechildComponent', () => {
  let component: CreatechildComponent;
  let fixture: ComponentFixture<CreatechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatechildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
