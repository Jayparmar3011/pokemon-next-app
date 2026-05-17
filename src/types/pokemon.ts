export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonType {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface PokemonState {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
  page: number;
  total: number;
  selectedType: string;
}

export const ALL_TYPE = "all";
export const GRID_VIEW = "grid";
export const LIST_VIEW = "list";
export const ABORT_ERROR = "AbortError";
