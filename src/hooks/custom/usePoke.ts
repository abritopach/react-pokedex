import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../../api/PokeApi";
import { useCallback } from "react";
import { Pokemon } from "../../models/pokemon.model";

export const _filterPokemons = (searchText: string) => useCallback(
    (pokemons: Pokemon[]) => {
    if (searchText === '') return pokemons;
    return pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchText.toLowerCase()));
    },
    [searchText]
);

export const useGetPokemons = ({limit = 24, offset = 0}) => {
    return useQuery({
        queryKey: ['fetch pokemons'],
        queryFn: () => getPokemons({ limit, offset}),
        select: _filterPokemons('')
    });
}
