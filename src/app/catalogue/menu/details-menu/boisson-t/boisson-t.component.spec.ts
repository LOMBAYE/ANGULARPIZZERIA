import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoissonTComponent } from './boisson-t.component';

describe('BoissonTComponent', () => {
  let component: BoissonTComponent;
  let fixture: ComponentFixture<BoissonTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoissonTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoissonTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
