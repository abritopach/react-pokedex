import { HeaderCard } from '../components/home/HeaderCard';
import { PokemonNews } from '../components/home/PokemonNews';
import './Home.css';

export const Home = () => {
    return (
        <section className='relative overflow-hidden home-background'>
            <HeaderCard />
            <PokemonNews />
        </section>
    );
}