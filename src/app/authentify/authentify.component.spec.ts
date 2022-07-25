import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentifyComponent } from './authentify.component';

describe('AuthentifyComponent', () => {
  let component: AuthentifyComponent;
  let fixture: ComponentFixture<AuthentifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthentifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthentifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
