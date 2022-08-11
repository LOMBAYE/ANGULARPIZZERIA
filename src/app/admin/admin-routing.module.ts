import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandesComponent } from './commandes/commandes.component';
import {DetailsCommandeComponent} from './commandes/details-commande/details-commande.component';
import { AdminComponent } from './admin.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { ProduitsComponent } from './produits/produits.component';
import { ZoneComponent } from './commandes/zone/zone.component';
import { DetailsLivreurComponent } from './livraisons/livreur/details-livreur/details-livreur.component';
import { DetailsLivraisonComponent } from './livraisons/details-livraison/details-livraison.component';
import { NewComponent } from './produits/new/new.component';

const routes: Routes = [
  { path: '', component: CommandesComponent},

  {  path: 'commandes', component: CommandesComponent},
  {  path: 'commandes/:id', component: DetailsCommandeComponent},
  {  path: 'commandes/zone/:id', component: ZoneComponent},

  {  path: 'livraisons', component: LivraisonsComponent},
  {  path: 'livraisons/:id', component: DetailsLivraisonComponent},
  {  path: 'livraisons/livreur/:id', component: DetailsLivreurComponent},

  { path: 'produits', component: ProduitsComponent},
  { path: 'produits/new', component: NewComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
