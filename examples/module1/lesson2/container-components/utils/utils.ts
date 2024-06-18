import { Character } from '../types/Character';
import { SORTED_OPTIONS } from './constants';

export function sortCharacters(
  characters: Character[],
  sortOption: string
): Character[] {
  return [...characters].sort((a, b) => {
    switch (sortOption) {
      case SORTED_OPTIONS.NAME:
        return a.name.localeCompare(b.name);
      case SORTED_OPTIONS.CREATED:
        return new Date(a.created).getTime() - new Date(b.created).getTime();
    }

    return 0;
  });
}
