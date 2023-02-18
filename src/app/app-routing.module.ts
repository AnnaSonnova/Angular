import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailComponent } from './detail/detail.component';
import { GardianLoginGuard } from './gardian-login.guard';
import { ListeComponent } from './liste/liste.component';
import { NonTrouverComponent } from './non-trouver/non-trouver.component';

const routes: Routes = [
  {path : "", component: AccueilComponent},
  {path : "produit", component:ListeComponent},
  {path : "produit/:id", component:DetailComponent,canActivate:[GardianLoginGuard], canDeactivate:[GardianLoginGuard]},
  {path : "**", component:NonTrouverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
