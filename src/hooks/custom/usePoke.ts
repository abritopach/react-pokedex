import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemons } from "../../api/PokeApi";
import { useCallback } from "react";
import { Pokemon } from "../../models/pokemon.model";

export const _filterPokemons = (searchText: string) => useCallback(
    (pokemons: Pokemon[]) => {
    if (searchText === '') return pokemons;
    return pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchText.toLowerCase()));
    },
    [searchText]
);

export const useFetchPokemons = ({limit = 25, offset = 25}) => {
    return useInfiniteQuery({
        queryKey: ['fetch pokemons'],
        queryFn: ({pageParam = 0}) => fetchPokemons({ limit, offset, pageParam}),
        initialPageParam: 0,
        getNextPageParam: (lastPage, _, lastPageParam) => {
            if ((lastPage.length === 0) || lastPage.length > 25) {
                return undefined
            }
            return lastPageParam + 1
        },
        getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
            console.log(firstPage, allPages);
            if (firstPageParam <= 1) {
                return undefined
            }
            return firstPageParam - 1
        },
    })
}
