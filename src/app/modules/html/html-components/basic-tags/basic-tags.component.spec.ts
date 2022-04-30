import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTagsComponent } from './basic-tags.component';

describe('BasicTagsComponent', () => {
  let component: BasicTagsComponent;
  let fixture: ComponentFixture<BasicTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
