import { Component } from '@angular/core';
import { Character } from '../character';
import { LotrService } from '../lotr.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent {
  characterList = this.lotrService.getAllCharacters();
  constructor(private lotrService: LotrService) {}
}
