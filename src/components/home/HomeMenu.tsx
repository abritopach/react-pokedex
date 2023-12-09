import { Link } from "react-router-dom";
import PokeBall from '../../assets/pokeball.png';
import "./HomeMenu.css";

export const HomeMenu = () => {

    return (
        <section className='grid grid-cols-2 justify-items-center gap-x-2 gap-y-6 px-3 w-full mx-auto pt-6 pb-12'>
            <figure className='cardMenu'>
                <Link
                    to='pokedex'>
                    <img className='pokeball1 pokeball' src={PokeBall} alt='Pokeball' />
                    <figcaption className='text-lg'>Pokedex</figcaption>
                    <img className='pokeball2 pokeball' src={PokeBall} alt='Pokeball' />
                </Link>
            </figure>

            <figure className='cardMenu'>
                <Link to='Moves'>
                    <img className='pokeball1 pokeball' src={PokeBall} alt='Pokeball' />
                    <figcaption className='text-lg'>Moves</figcaption>
                    <img className='pokeball2 pokeball' src={PokeBall} alt='Pokeball' />
                </Link>
            </figure>

            <figure className='cardMenu'>
                <Link to='Abilities'>
                    <img className='pokeball1 pokeball' src={PokeBall} alt='Pokeball' />
                    <figcaption className='text-lg'>Abilities</figcaption>
                    <img className='pokeball2 pokeball' src={PokeBall} alt='Pokeball' />
                </Link>
            </figure>

            <figure className='cardMenu'>
                <Link to='Berries'>
                    <img className='pokeball1 pokeball' src={PokeBall} alt='Pokeball' />
                    <figcaption className='text-lg'>Berries</figcaption>
                    <img className='pokeball2 pokeball' src={PokeBall} alt='Pokeball' />
                </Link>
            </figure>

            <figure className='cardMenu'>
                <Link to='Location'>
                    <img className='pokeball1 pokeball' src={PokeBall} alt='Pokeball' />
                    <figcaption className='text-lg'>Location</figcaption>
                    <img className='pokeball2 pokeball' src={PokeBall} alt='Pokeball' />
                </Link>
            </figure>

            <figure className='cardMenu'>
                <Link to='Type_Charts'>
                    <img className='pokeball1 pokeball' src={PokeBall} alt='Pokeball' />
                    <figcaption className='text-lg'>Type Charts</figcaption>
                    <img className='pokeball2 pokeball' src={PokeBall} alt='Pokeball' />
                </Link>
            </figure>
        </section>
    );
};
