import PokeBall from '../assets/pokeball.png';
import { SearchBar } from '../components/SearchBar';
import { HomeMenu } from '../components/home/HomeMenu';
import { News } from '../components/home/News';
import './Home.css';

export const Home = () => {
    return (
        <section className='relative overflow-hidden home-background'>
            <article className='home-menu pt-16'>
                <figure className='relative'>
                    <img className='home-pokeball' src={PokeBall} alt='PokeBall image' />
                    <figcaption className='font-extrabold md:text-5xl text-2xl leading-relaxed py-3 px-4 md:w-10/12 w-full mx-auto'>
                        What Pokemon <br /> are you looking for?
                    </figcaption>
                </figure>
                <SearchBar />
                <HomeMenu />
            </article>
            <News />
        </section>
    );
}