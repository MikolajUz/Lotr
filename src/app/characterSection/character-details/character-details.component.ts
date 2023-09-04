import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LotrService } from 'src/app/lotr.service';
import { ArmoryService } from 'src/app/armorySection/services/armory.service';
import { Character } from '../interfaces/character-interface';
import { Armory } from 'src/app/armorySection/interfaces/armory-interface';
import { Observable, map, take } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent {
  character: Observable<Character> = this.lotrService.getCharacterById(
    Number(this.route.snapshot.params['id'])
  );
  weapons: Observable<Armory[]> = this.armory.getWeapons();
  weaponChosen!: Armory;
  strength: number = 1;

  isChosen: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private lotrService: LotrService,
    private armory: ArmoryService
  ) {}

  Submit(weapon: Armory) {
    console.log(weapon.name);
    this.strength = this.strength + weapon.strength;
    console.log(this.strength);

    this.isChosen = true;
  }
}
