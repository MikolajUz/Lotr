import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersListComponent } from './characterSection/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './characterSection/character-details/character-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SingleCharacterComponent } from './characterSection/single-character/single-character.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LotrService } from './lotr.service';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterDetailsComponent,
    SingleCharacterComponent,
    MenuComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
