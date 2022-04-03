import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchDirectivesComponent } from './ngswitch-directives.component';

describe('NgswitchDirectivesComponent', () => {
  let component: NgswitchDirectivesComponent;
  let fixture: ComponentFixture<NgswitchDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswitchDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswitchDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
