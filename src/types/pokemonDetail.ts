import { Sprites } from "./spirites";

export interface NamedAPIResource {
   name: string;
   url: string;
}

export interface PokemonAbility {
   ability: NamedAPIResource;
   is_hidden: boolean;
   slot: number;
}

export interface HeldItem {
   item: NamedAPIResource;
   version_details: VersionDetail[];
}

export interface VersionDetail {
   rarity: number;
   version: NamedAPIResource;
}

export interface Move {
   move: NamedAPIResource;
   version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
   level_learned_at: number;
   move_learn_method: NamedAPIResource;
   order: number | null;
   version_group: NamedAPIResource;
}

export interface Stat {
   base_stat: number;
   effort: number;
   stat: NamedAPIResource;
}

export interface GameIndex {
   game_index: number;
   version: NamedAPIResource;
}

export interface PokemonType {
   slot: number;
   type: NamedAPIResource;
}

export interface PokemonDetail {
   abilities: PokemonAbility[];
   base_experience: number;
   cries: {
      latest: string;
      legacy: string;
   };
   forms: NamedAPIResource[];
   game_indices: GameIndex[];
   height: number;
   held_items: HeldItem[];
   id: number;
   is_default: boolean;
   location_area_encounters: string;
   moves: Move[];
   name: string;
   order: number;
   past_abilities: NamedAPIResource[];
   past_types: NamedAPIResource[];
   species: NamedAPIResource;
   sprites: Sprites;
   stats: Stat[];
   types: PokemonType[];
   weight: number;
}
