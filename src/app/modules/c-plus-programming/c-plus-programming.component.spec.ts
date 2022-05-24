import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPlusProgrammingComponent } from './c-plus-programming.component';

describe('CPlusProgrammingComponent', () => {
  let component: CPlusProgrammingComponent;
  let fixture: ComponentFixture<CPlusProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPlusProgrammingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CPlusProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
