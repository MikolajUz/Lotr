import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Armory } from '../interfaces/armory-interface';
import { ArmoryAPI } from '../interfaces/armory-api-interface';
import { Observable, map } from 'rxjs';
import { TemplateBindingParseResult } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ArmoryService {
  url = 'https://www.dnd5eapi.co/api/equipment-categories/weapon';
  constructor(private http: HttpClient) {}

  getWeapons(): Observable<Armory[]> {
    const temp = this.http.get<ArmoryAPI>(this.url).pipe(
      map((ArmoryAPIitem) => ArmoryAPIitem.equipment),
      map((elem) => {
        elem.forEach((elem2) => (elem2.strength = elem2.name.length));
        return elem;
      })
    );
    return temp;
  }
}
