import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerDesignComponent } from './compiler-design.component';

describe('CompilerDesignComponent', () => {
  let component: CompilerDesignComponent;
  let fixture: ComponentFixture<CompilerDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompilerDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilerDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
