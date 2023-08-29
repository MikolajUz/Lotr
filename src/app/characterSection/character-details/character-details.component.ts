import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LotrService } from 'src/app/lotr.service';
import { Character } from '../character';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  character: Character | undefined;

  constructor(
    private route: ActivatedRoute,
    private lotrService: LotrService
  ) {}

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.lotrService.getCharacterById(id).subscribe((fetchedCharacter) => {
      this.character = fetchedCharacter;
    });
  }
}
