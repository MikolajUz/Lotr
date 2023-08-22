import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

const routes: Routes = [
  { path: 'characters', component: CharactersListComponent },
  { path: 'details/:id', component: CharacterDetailsComponent},
  { path : '', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
