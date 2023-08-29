import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { LotrService } from 'src/app/lotr.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent implements OnInit {
  constructor(private lotrService: LotrService) {}
  characterList: Character[] = [];

  ngOnInit(): void {
    this.lotrService.getAllCharacters().subscribe({
      next: (fetchedList: any): void => {
        this.characterList = fetchedList.results;
      },
    });
  }
}
