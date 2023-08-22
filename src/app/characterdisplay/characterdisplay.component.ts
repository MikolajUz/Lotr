import { Component, Input,inject } from '@angular/core';
import { Character } from '../character';
import { LotrService } from '../lotr.service';

@Component({
  selector: 'app-characterdisplay',
  templateUrl: './characterdisplay.component.html',
  styleUrls: ['./characterdisplay.component.css']
})
export class CharacterdisplayComponent {
  @Input() character!: Character;
  lotrService: LotrService = inject(LotrService);
}
