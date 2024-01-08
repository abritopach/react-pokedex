import { useQueryClient } from "@tanstack/react-query";
import { SearchBar } from "../common/search-bar/SearchBar";

import "./PokedexSearch.css";
import { Pokemon } from "../../models/pokemon.model";
import { useOutsideClick } from "../../hooks/custom/useOutsideClick";
import { RefObject } from "react";

interface PropsPokedexSearch {
    searchForPokemon: boolean;
    setSearchForPokemon: React.Dispatch<React.SetStateAction<boolean>>
}

interface QueryData {
    pages: Array<Pokemon[]>;
    pageParams: number[];
}

export const PokedexSearch = ({searchForPokemon, setSearchForPokemon}: PropsPokedexSearch) => {

    const queryClient = useQueryClient();
    const allPokemonPages: QueryData | undefined = queryClient.getQueryData(['fetch pokemons']);
    const newPagesArray = (searchText: string) => {
        if (searchText === '') return allPokemonPages?.pages;
        return allPokemonPages?.pages.map((page) =>
            page.filter((pokemon: Pokemon) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())),
    ) ?? []
    };

    const handleClickOutside = () => {
        setSearchForPokemon(!searchForPokemon);
    };
    const ref = useOutsideClick(handleClickOutside);

    const onChangeHandler = (value: string) => {
        filterPokemons(value);
    }

    const filterPokemons = (searchText: string) => {
        queryClient.setQueryData(['fetch pokemons'], (data: QueryData) => ({
            pages: newPagesArray(searchText),
            pageParams: data.pageParams,
        }));
    };


    return (
        <section
            className={`${
                searchForPokemon ? "searchSection active" : "searchSection"
            }`}
        >
            <div ref={ref as RefObject<HTMLDivElement>} className="searchBar">
                <SearchBar onChange={onChangeHandler} />
            </div>
        </section>
    );
};