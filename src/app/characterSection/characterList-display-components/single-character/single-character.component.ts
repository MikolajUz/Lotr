import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character-interface';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.scss'],
})
export class SingleCharacterComponent {
  @Input() character!: Character;
}
