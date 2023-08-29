import { Component, Input, inject } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css'],
})
export class SingleCharacterComponent {
  @Input() character!: Character;
}
