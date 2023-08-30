import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './characterSection/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './characterSection/character-details/character-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'characters', component: CharactersListComponent },
  { path: 'details/:id', component: CharacterDetailsComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
