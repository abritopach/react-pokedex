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

export const getPokemons = async ({limit = 24, offset = 0}): Promise<Pokemon[]> => {
    const res = await fetch(`${URL_BASE}?limit=${limit}&offset=${offset}`);
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
