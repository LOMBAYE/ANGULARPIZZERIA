import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TdComponent } from './td/td.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TestComponent } from './test/test.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProduitsComponent } from './catalogue/produits/produits.component';
import { DetailsComponent } from './catalogue/produits/details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthentifyComponent } from './authentify/authentify.component';
import { PanierComponent } from './panier/panier.component';
import { ShopListComponent } from './panier/shop-list/shop-list.component';
import { BurgerComponent } from './catalogue/burger/burger.component';
import { MenuComponent } from './catalogue/menu/menu.component';
import { DetailsMenuComponent } from './catalogue/menu/details-menu/details-menu.component';
import { DetailsBurgerComponent } from './catalogue/burger/details-burger/details-burger.component';

@NgModule({
  declarations: [
    AppComponent,
    TdComponent,
    ReactiveFormComponent,
    AccueilComponent,
    TestComponent,
    CatalogueComponent,
    HeaderComponent,
    FooterComponent,
    ProduitsComponent,
    DetailsComponent,
    NotFoundComponent,
    AuthentifyComponent,
    PanierComponent,
    ShopListComponent,
    BurgerComponent,
    MenuComponent,
    DetailsMenuComponent,
    DetailsBurgerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
