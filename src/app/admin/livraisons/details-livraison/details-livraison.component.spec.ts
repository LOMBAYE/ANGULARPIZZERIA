import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLivraisonComponent } from './details-livraison.component';

describe('DetailsLivraisonComponent', () => {
  let component: DetailsLivraisonComponent;
  let fixture: ComponentFixture<DetailsLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsLivraisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
