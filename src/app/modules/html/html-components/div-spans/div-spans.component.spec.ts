import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivSpansComponent } from './div-spans.component';

describe('DivSpansComponent', () => {
  let component: DivSpansComponent;
  let fixture: ComponentFixture<DivSpansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivSpansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivSpansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
