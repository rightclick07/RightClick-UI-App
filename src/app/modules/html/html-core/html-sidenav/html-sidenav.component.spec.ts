import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlSidenavComponent } from './html-sidenav.component';

describe('HtmlSidenavComponent', () => {
  let component: HtmlSidenavComponent;
  let fixture: ComponentFixture<HtmlSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
