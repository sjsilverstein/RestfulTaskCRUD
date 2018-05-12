import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ALPHAComponent } from './alpha.component';

describe('ALPHAComponent', () => {
  let component: ALPHAComponent;
  let fixture: ComponentFixture<ALPHAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALPHAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ALPHAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
