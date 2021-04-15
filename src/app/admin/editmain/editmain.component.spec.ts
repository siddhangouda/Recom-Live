import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmainComponent } from './editmain.component';

describe('EditmainComponent', () => {
  let component: EditmainComponent;
  let fixture: ComponentFixture<EditmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
