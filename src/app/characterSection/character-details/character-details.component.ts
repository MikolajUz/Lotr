import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LotrService } from 'src/app/lotr.service';
import { Character } from '../interfaces/character-interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent {
  character: Observable <Character> = this.lotrService.getCharacterById(
    Number(this.route.snapshot.params['id'])
  );

  
  constructor(
    private route: ActivatedRoute,
    private lotrService: LotrService
  ) {}
}
