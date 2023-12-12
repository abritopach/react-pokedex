import { PokedexContainer } from "../components/pokedex/PokedexContainer";
import './Pokedex.css';
import { useState } from "react";
import { PokedexGeneration } from "../components/pokedex/PokedexGeneration";
import { Header } from "../components/common/Header";

export const Pokedex = () => {

    const [searchForGeneration, setSearchForGeneration] = useState(false);

    return (
        <section className='pokedex relative'>
            <Header title="Pokedex" showArrowBack={true} showMenuToggle={true} setSearchForGeneration={setSearchForGeneration}
                searchForGeneration={searchForGeneration} />
            <PokedexContainer />
            {searchForGeneration && (
                <PokedexGeneration searchForGeneration={searchForGeneration} />
            )}
        </section>
    );
}
