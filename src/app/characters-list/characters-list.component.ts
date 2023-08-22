import { Component, Input, inject } from '@angular/core';
import { Character } from '../character';
import { LotrService } from '../lotr.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent {

  characterList: Character[] = [];
  lotrService: LotrService = inject(LotrService);
  //url: string = '';

  constructor() {
    this.lotrService.getAllCharacters().then((characterList: any) => {
      console.log(characterList.results)
      this.characterList = characterList.results;
    });
  }
}
