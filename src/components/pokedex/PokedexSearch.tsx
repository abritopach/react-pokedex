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

export const PokedexSearch = ({searchForPokemon, setSearchForPokemon}: PropsPokedexSearch) => {
    const queryClient = useQueryClient();
    const allPokemons: Pokemon[] = queryClient.getQueryData(['fetch pokemons']) ?? [];

    const handleClickOutside = () => {
        setSearchForPokemon(!searchForPokemon);
    };
    const ref = useOutsideClick(handleClickOutside);

    const onChangeHandler = (value: string) => {
        filterPokemons(value);
    }

    const filterPokemons = (searchText: string) => {
        queryClient.setQueryData(['fetch pokemons'], () => {
            if (searchText === '') return allPokemons;
            return allPokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchText.toLowerCase()));
        });
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