import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialSidenavComponent } from './angular-material-sidenav.component';

describe('AngularMaterialSidenavComponent', () => {
  let component: AngularMaterialSidenavComponent;
  let fixture: ComponentFixture<AngularMaterialSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMaterialSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
