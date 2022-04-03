import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifDirectivesComponent } from './ngif-directives.component';

describe('NgifDirectivesComponent', () => {
  let component: NgifDirectivesComponent;
  let fixture: ComponentFixture<NgifDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
