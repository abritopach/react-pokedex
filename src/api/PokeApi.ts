import { Pokemon } from "../models/pokemon.model";

const URL_BASE = 'https://pokeapi.co/api/v2/pokemon';

export interface PokemonsResponse {
    count: number;
    next: string;
    previous: string;
    results: PokemonsResult[];
}

export interface PokemonsResult {
    name: string
    url: string
}

export const fetchPokemons = async ({limit = 25, offset = 0, pageParam = 0 }): Promise<Pokemon[]> => {
    const res = await fetch(`${URL_BASE}?limit=${limit}&offset=${offset === 25 ? (offset * pageParam) : offset}`);
    const data : PokemonsResponse = await res.json();
    const promises = data.results.map(async (pokemon) => {
        return await getPokemon(pokemon.url);
    });
    return Promise.all(promises);
}

export const getPokemon = async (url: string): Promise<Pokemon> => {
    const res = await fetch(url);
    return res.json();
}
