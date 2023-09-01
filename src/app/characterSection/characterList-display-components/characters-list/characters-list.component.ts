import { Component } from '@angular/core';
import { LotrService } from 'src/app/lotr.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  characterList = this.lotrService.getAllCharacters();

  constructor(private lotrService: LotrService) {}
}
