import { Character } from './app/characterSection/character';

export interface CharacterDataApi {
  count: number;
  links: Object;
  results: Array<Character>;
}
