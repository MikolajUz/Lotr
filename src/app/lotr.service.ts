import { Injectable } from '@angular/core';
import { Character } from './character';

@Injectable({
  providedIn: 'root',
})
export class LotrService {


  url = 'https://lotrapi.co/api/v1/characters';
  //url = 'http://localhost:3000/locations';
  static baseUrl: any;

  async getAllCharacters(): Promise<Character[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getCharacterById(id: number): Promise<Character | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  constructor() {}
}
