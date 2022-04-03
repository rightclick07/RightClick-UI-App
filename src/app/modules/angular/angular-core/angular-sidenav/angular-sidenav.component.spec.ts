import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSidenavComponent } from './angular-sidenav.component';

describe('AngularSidenavComponent', () => {
  let component: AngularSidenavComponent;
  let fixture: ComponentFixture<AngularSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
