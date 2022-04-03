import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforDirectivesComponent } from './ngfor-directives.component';

describe('NgforDirectivesComponent', () => {
  let component: NgforDirectivesComponent;
  let fixture: ComponentFixture<NgforDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
