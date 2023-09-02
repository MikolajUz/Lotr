import { Component } from '@angular/core';
import { ArmoryService } from '../services/armory.service';
@Component({
  selector: 'app-armory-list',
  templateUrl: './armory-list.component.html',
  styleUrls: ['./armory-list.component.scss'],
})
export class ArmoryListComponent {
  armoryList = this.service.getWeapons();
  constructor(private service: ArmoryService) {}
}
