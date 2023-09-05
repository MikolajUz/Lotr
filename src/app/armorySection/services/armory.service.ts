import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Armory } from '../interfaces/armory-interface';
import { ArmoryAPI } from '../interfaces/armory-api-interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArmoryService {
  url = 'https://www.dnd5eapi.co/api/equipment-categories/weapon';
  constructor(private http: HttpClient) {}

  getWeapons(): Observable<Armory[]> {
    return this.http.get<ArmoryAPI>(this.url).pipe(
      map((ArmoryAPIitem) => ArmoryAPIitem.equipment),
      map((weapons) => {
        weapons.forEach((weapon) => (weapon.strength = weapon.name.length));
        return weapons;
      })
    );
  }
}
