import { Character } from './character-interface';

export interface CharacterDataApi {
  count: number;
  links: Object;
  results: Array<Character>;
}
