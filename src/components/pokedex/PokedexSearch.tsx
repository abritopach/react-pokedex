import { useQueryClient } from "@tanstack/react-query";
import { SearchBar } from "../common/search-bar/SearchBar";

import "./PokedexSearch.css";
import { Pokemon } from "../../models/pokemon.model";
import { useOutsideClick } from "../../hooks/custom/useOutsideClick";
import { RefObject } from "react";
import { FabOptions, PropsFabOption } from "../../models/fab.model";

export interface QueryData {
    pages: Array<Pokemon[]>;
    pageParams: number[];
}

export const PokedexSearch = ({clickOutside}: PropsFabOption) => {

    const queryClient = useQueryClient();
    const allPokemonPages: QueryData | undefined = queryClient.getQueryData(['fetch pokemons']);
    const newPagesArray = (searchText: string) => {
        if (searchText === '') return allPokemonPages?.pages;
        return allPokemonPages?.pages.map((page) =>
            page.filter((pokemon: Pokemon) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())),
    ) ?? []
    };
    const filterPokemons = (searchText: string) => {
        queryClient.setQueryData(['fetch pokemons'], (data: QueryData) => ({
            pages: newPagesArray(searchText),
            pageParams: data.pageParams,
        }));
    };

    const handleClickOutside = () => {
        clickOutside(FabOptions.Search);
    };
    const ref = useOutsideClick(handleClickOutside);

    const onChangeHandler = (value: string) => {
        filterPokemons(value);
    }

    return (
        <section
            className="searchSection active"
        >
            <div ref={ref as RefObject<HTMLDivElement>} className="searchBar">
                <SearchBar onChange={onChangeHandler} />
            </div>
        </section>
    );
};