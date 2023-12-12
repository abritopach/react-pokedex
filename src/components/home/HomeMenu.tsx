import { Link } from "react-router-dom";
import PokeBall from '../../assets/pokeball.png';
import "./HomeMenu.css";

export const HomeMenu = () => {

    return (
        <section className='grid grid-cols-2 justify-items-center gap-x-2 md:gap-x-4 gap-y-6 px-3 md:w-1/2 w-full mx-auto md:pt-8 md:pb-16 pt-6 pb-12'>
            <Link to='pokedex' className='card-menu'>
                <figure>
                    <img className='pokeball1 pokeball' src={PokeBall} alt='Pokeball' />
                    <figcaption className='text-lg'>Pokedex</figcaption>
                    <img className='pokeball2 pokeball' src={PokeBall} alt='Pokeball' />
                </figure>
            </Link>

            <Link to='Moves' className='card-menu'>
                <figure>
                    <img className='pokeball1 pokeball' src={PokeBall} alt='Pokeball' />
                    <figcaption className='text-lg'>Moves</figcaption>
                    <img className='pokeball2 pokeball' src={PokeBall} alt='Pokeball' />
                </figure>
            </Link>

            <Link to='Abilities' className='card-menu'>
                <figure>
                    <img className='pokeball1 pokeball' src={PokeBall} alt='Pokeball' />
                    <figcaption className='text-lg'>Abilities</figcaption>
                    <img className='pokeball2 pokeball' src={PokeBall} alt='Pokeball' />
                </figure>
            </Link>

            <Link to='Berries' className='card-menu'>
                <figure>
                    <img className='pokeball1 pokeball' src={PokeBall} alt='Pokeball' />
                    <figcaption className='text-lg'>Berries</figcaption>
                    <img className='pokeball2 pokeball' src={PokeBall} alt='Pokeball' />
                </figure>
            </Link>

            <Link to='Location' className='card-menu'>
                <figure>
                    <img className='pokeball1 pokeball' src={PokeBall} alt='Pokeball' />
                    <figcaption className='text-lg'>Location</figcaption>
                    <img className='pokeball2 pokeball' src={PokeBall} alt='Pokeball' />
                </figure>
            </Link>

            <Link to='Type_Charts' className='card-menu'>
                <figure>
                    <img className='pokeball1 pokeball' src={PokeBall} alt='Pokeball' />
                    <figcaption className='text-lg'>Type Charts</figcaption>
                    <img className='pokeball2 pokeball' src={PokeBall} alt='Pokeball' />
                </figure>
            </Link>
        </section>
    );
};
