import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HttpClientModule } from '@angular/common/http';
import { CommandesComponent } from './commandes/commandes.component';
import { DatepipePipe } from '../pipes/datepipe.pipe';
import { DetailsCommandeComponent } from './commandes/details-commande/details-commande.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { ProduitsComponent } from './produits/produits.component';
import { ZoneComponent } from './commandes/zone/zone.component';
import { DetailsLivreurComponent } from './livraisons/livreur/details-livreur/details-livreur.component';
import { DetailsLivraisonComponent } from './livraisons/details-livraison/details-livraison.component';
import { NewComponent } from './produits/new/new.component';

@NgModule({
  declarations: [
    AdminComponent,
    CommandesComponent,
    DetailsCommandeComponent,
    LivraisonsComponent,
    ProduitsComponent,
    ZoneComponent,
    DetailsLivreurComponent,
    DetailsLivraisonComponent,
    NewComponent,
    AdminComponent,
    DatepipePipe,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
