import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListUserComponent } from './list-user/list-user.component'; // Importez le composant

const routes: Routes = [
  { path: '', component: ListUserComponent }, // Définissez le composant à afficher sur la page d'accueil
  // Ajoutez d'autres routes si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
