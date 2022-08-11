import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthentifyComponent } from './authentify/authentify.component';
import { DetailsBurgerComponent } from './catalogue/burger/details-burger/details-burger.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DetailsMenuComponent } from './catalogue/menu/details-menu/details-menu.component';
import { DetailsComponent } from './catalogue/produits/details/details.component';
import { ClientComponent } from './commandes/client/client.component';
import { CommandesComponent } from './commandes/commandes.component';
import { DetailsCommandeComponent } from './commandes/details-commande/details-commande.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  // faire attention a l ordre commencer par le plus particulier
  // pathMatch full car ''!='  '
  {path: '', redirectTo:'/catalogue',pathMatch: 'full'},
  {path: 'catalogue', component:CatalogueComponent},
  {path: 'burger/:id', component:DetailsBurgerComponent},
  {path: 'menu/:id', component:DetailsMenuComponent},

  {path: 'panier', component:PanierComponent},

  {path: 'signup', component:AuthentifyComponent},
  {path: 'client/:id', component:ClientComponent},

  {path: 'commandes', component:CommandesComponent},
  {path: 'commandes/:id', component:DetailsCommandeComponent},


  {path: 'notFound',component:NotFoundComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path: '**', redirectTo:'/notFound'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
