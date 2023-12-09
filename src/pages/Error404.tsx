import { Link } from "react-router-dom";
import PokeApiLogo from '../assets/pokeapi_logo.png';
import PikachuHurt from '../assets/pikachu_hurt.png';

export const Error404 = () => {
    return (
        <section className='flex flex-col justify-center pt-6 items-center w-full mx-auto z-20'>
            <figure className='flex justify-center items-center'>
                <Link to='/' className='flex flex-col justify-center items-center'>
                    <img
                        className='w-1/2'
                        src={PokeApiLogo}
                        alt='Pokeapi Title'
                        title='Back to the Menu'
                    />
                </Link>
            </figure>
            <figure className='flex flex-col justify-center items-center mt-8'>
                <img
                    className='w-1/3'
                    src={PikachuHurt}
                    alt='Pikachu hurt'
                />
                <figcaption className='w-4/5 text-center md:text-2xl text-medium text-xl pt-2'>
                    <h1>Page Not Found</h1>
                    <p className='pt-2'>The page you are looking for may have been moved, deleted or possibly never existed.</p>
                    <span role='img' aria-label='sad-icon'>
                        😥
                    </span>
                </figcaption>
            </figure>
        </section>
    );
}
