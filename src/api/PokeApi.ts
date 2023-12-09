const URL_BASE = 'https://pokeapi.co/api/v2/pokemon';

export interface Response {
    count: number;
    next: string;
    previous: string;
    results: PokemonsResult[];
}

export interface PokemonsResult {
    name: string
    url: string
}

export const getPokemons = async (): Promise<Response> => {
    const res = await fetch(`${URL_BASE}`);
    return res.json();
}
