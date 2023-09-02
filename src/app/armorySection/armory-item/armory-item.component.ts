import { Component, Input } from '@angular/core';
import { ArmoryService } from '../services/armory.service';
import { Armory } from '../interfaces/armory-interface';

@Component({
  selector: 'app-armory-item',
  templateUrl: './armory-item.component.html',
  styleUrls: ['./armory-item.component.scss'],
})
export class ArmoryItemComponent {
  @Input() armoryItem!: Armory;
}
