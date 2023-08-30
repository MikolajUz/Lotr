import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { LotrService } from 'src/app/lotr.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent {
  characterList!: Observable<Character[]>;

  constructor(private lotrService: LotrService) {
    this.characterList = this.lotrService.getAllCharacters();
  }
}
