import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitComponent } from './produit/produit.component';
import { DetailComponent } from './detail/detail.component';
import { EnteteComponent } from './entete/entete.component';
import { NonTrouverComponent } from './non-trouver/non-trouver.component';
import { ListeComponent } from './liste/liste.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProduitComponent,
    DetailComponent,
    EnteteComponent,
    NonTrouverComponent,
    ListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

