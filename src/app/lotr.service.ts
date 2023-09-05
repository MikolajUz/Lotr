import { Injectable } from '@angular/core';
import { Character } from './characterSection/interfaces/character-interface';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CharacterDataApi } from './characterSection/interfaces/characterDataApi-interface';

@Injectable({
  providedIn: 'root',
})
export class LotrService {
  private url = 'https://lotrapi.co/api/v1/characters';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http
      .get<CharacterDataApi>(this.url)
      .pipe(map((fullCharacterData) => fullCharacterData.results));
  }

  getCharacterById(id: number): Observable<Character> {
    const characterUrl = `${this.url}/${id}`;
    return this.http.get<Character>(characterUrl).pipe(
      map((apiChar) => {
        apiChar.strength = Number(apiChar.height.slice(0, -2)) * 10;
        return apiChar;
      })
    );
  }
}
