import { Injectable } from '@angular/core';
import { Character } from './character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LotrService {


  url = 'https://lotrapi.co/api/v1/characters';
 

  async getAllCharacters(): Promise<Character[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getCharacterById(id: number): Observable <Character | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  constructor() {}
}
