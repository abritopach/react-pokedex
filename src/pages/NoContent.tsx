import { Link } from "react-router-dom";

import PokeApiLogo from '../assets/pokeapi_logo.png';
import EmptyPokeBall from '../assets/empty_pokeball.png';

export const NoContent = () => {
    return (
        <section className='flex flex-col justify-center pt-6 items-center w-full mx-auto'>
            <figure className='flex justify-center items-center pl-4'>
                <Link to='/' className='flex items-center'>
                    <span
                        className='material-icons-outlined mr-2 pt-2 text-4xl'
                        title='Back to the Menu'
                    >
                        reply
                    </span>
                    <img
                        className='w-1/2'
                        src={PokeApiLogo}
                        alt='Pokeapi Title'
                        title='Back to the Menu'
                    />
                </Link>
            </figure>
            <figure className='flex flex-col justify-center items-center mt-16'>
                <img
                    className='w-1/3'
                    src={EmptyPokeBall}
                    alt='Empty Pokeball'
                />
                <figcaption className='w-4/5 text-center md:text-2xl text-medium text-xl pt-4'>
                    I'm sorry, we're working on this content, please come back
                    later.
                </figcaption>
            </figure>
        </section>
    );
}