import { Injectable } from '@angular/core';
import { Character } from './characterSection/character';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LotrService {
  private url = 'https://lotrapi.co/api/v1/characters';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.url);
  }

  getCharacterById(id: number): Observable<Character> {
    const characterUrl = `${this.url}/${id}`;
    return this.http.get<Character>(characterUrl);
  }
}
