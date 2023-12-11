import { PokedexContainer } from "../components/pokedex/PokedexContainer";
import './Pokedex.css';
import PokeBall from '../assets/pokeball.png';

export const Pokedex = () => {
    return (
        <section className='pokedex relative'>
            <img className='pokeball-menu' src={PokeBall} alt='Pokeball bg' />
            <PokedexContainer />
        </section>
    );
}
