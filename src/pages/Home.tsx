import { SearchBar } from '../components/SearchBar';
import { Header } from '../components/common/Header';
import { HomeMenu } from '../components/home/HomeMenu';
import { News } from '../components/home/News';
import './Home.css';

export const Home = () => {
    return (
        <section className='relative overflow-hidden home-background'>
            <article className='home-menu'>
                <Header title="What Pokemon <br /> are you looking for?" />
                <SearchBar />
                <HomeMenu />
            </article>
            <News />
        </section>
    );
}