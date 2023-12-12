import { PokedexContainer } from "../components/pokedex/PokedexContainer";
import './Pokedex.css';
import PokeBall from '../assets/pokeball.png';
import { PokedexHeader } from "../components/pokedex/PokedexHeader";
import { useState } from "react";
import { PokedexGeneration } from "../components/pokedex/PokedexGeneration";

export const Pokedex = () => {

    const [searchForGeneration, setSearchForGeneration] = useState(false);

    return (
        <section className='pokedex relative'>
            <img className='pokeball-menu' src={PokeBall} alt='Pokeball bg' />
            <PokedexHeader
                setSearchForGeneration={setSearchForGeneration}
                searchForGeneration={searchForGeneration}
            />
            <PokedexContainer />
            {searchForGeneration && (
                <PokedexGeneration searchForGeneration={searchForGeneration} />
            )}
        </section>
    );
}
