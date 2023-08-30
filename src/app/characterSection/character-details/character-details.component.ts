import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LotrService } from 'src/app/lotr.service';
import { Character } from '../character';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent {
  character: Observable<Character>;

  constructor(private route: ActivatedRoute, private lotrService: LotrService) {
    const id = Number(this.route.snapshot.params['id']);
    this.character = lotrService.getCharacterById(id);
    console.log(this.character);
  }

  // ngOnInit(): void {
  //   this.getCharacter();
  // }

  // getCharacter(): void {
  //   const id = Number(this.route.snapshot.params['id']);
  //   this.lotrService
  //     .getCharacterById(id)
  //     .subscribe((fetchedCharacter: Character) => {
  //       this.character = fetchedCharacter;
  //     });
  // }
}
