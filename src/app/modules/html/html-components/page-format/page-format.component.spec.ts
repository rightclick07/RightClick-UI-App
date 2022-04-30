import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormatComponent } from './page-format.component';

describe('PageFormatComponent', () => {
  let component: PageFormatComponent;
  let fixture: ComponentFixture<PageFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
