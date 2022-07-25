import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthentifyComponent } from './authentify/authentify.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DetailsComponent } from './catalogue/produits/details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // faire attention a l ordre commencer par le plus particulier
  // pathMatch full car ''!='  '
  {path: '', redirectTo:'/catalogue',pathMatch: 'full'},
  {path: 'catalogue', component:CatalogueComponent},
  {path: 'catalogue/:id', component:DetailsComponent},

  {path: 'signup', component:AuthentifyComponent},

  {path: 'notFound',component:NotFoundComponent},
  {path: '**', redirectTo:'/notFound'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
