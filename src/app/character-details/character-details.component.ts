import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LotrService } from '../lotr.service';
import { Character } from '../character';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  lotrService: LotrService = inject(LotrService);
  character: Character | undefined;

  constructor(){

    const id = Number(this.route.snapshot.params['id']);
    this.lotrService
      .getCharacterById(id).then((character)=>{
        this.character=character
      }); 
      
    }

}
