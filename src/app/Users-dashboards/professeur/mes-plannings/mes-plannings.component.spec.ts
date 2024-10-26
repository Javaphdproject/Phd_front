import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPlanningsComponent } from './mes-plannings.component';

describe('MesPlanningsComponent', () => {
  let component: MesPlanningsComponent;
  let fixture: ComponentFixture<MesPlanningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesPlanningsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesPlanningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
