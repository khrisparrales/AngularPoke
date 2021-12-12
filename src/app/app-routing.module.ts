import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokedescriptcionComponent } from './components/pokedescriptcion/pokedescriptcion.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pokemons/:id',
    component: PokedescriptcionComponent,
  },
  {
    path: 'pokemons',
    component: PokemonsComponent,
  },
  {
    path: '',
    redirectTo: '/pokemons',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
