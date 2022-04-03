import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentModuleComponent } from './component-module.component';

describe('ComponentModuleComponent', () => {
  let component: ComponentModuleComponent;
  let fixture: ComponentFixture<ComponentModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
