import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersListComponent } from './characterSection/characterList-display-components/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './characterSection/character-details/character-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SingleCharacterComponent } from './characterSection/characterList-display-components/single-character/single-character.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ArmoryListComponent } from './armorySection/armory-list/armory-list.component';
import { ArmoryItemComponent } from './armorySection/armory-item/armory-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterDetailsComponent,
    SingleCharacterComponent,
    MenuComponent,
    HomeComponent,
    ArmoryListComponent,
    ArmoryItemComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
