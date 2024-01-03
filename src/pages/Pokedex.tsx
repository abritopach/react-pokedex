import { PokedexContainer } from "../components/pokedex/PokedexContainer";
import './Pokedex.css';
import { Header } from "../components/common/header/Header";
import { FabMenu } from "../components/pokedex/FabMenu";

export const Pokedex = () => {

    return (
        <section className='pokedex relative'>
            <Header title="Pokedex" showArrowBack={true} />
            <FabMenu />
            <PokedexContainer />
            { /*
            {searchForGeneration && (
                <PokedexGeneration setSearchForGeneration={setSearchForGeneration} searchForGeneration={searchForGeneration} />
            )}
            */ }
        </section>
    );
}
