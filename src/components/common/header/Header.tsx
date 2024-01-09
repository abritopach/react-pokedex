import { Link } from "react-router-dom";
import PokeBall from '../../../assets/pokeball.png';
import './Header.css';

interface PropsHeader {
    title: string;
    showArrowBack?: boolean
}

export const Header = ({
    title,
    showArrowBack = false
}: PropsHeader) => {

    return (
        <header className='sticky top-0 z-20 pt-10 pl-10'>
            <section
                className='flex items-center justify-between'
            >
                {showArrowBack && (
                    <Link to='/' data-testid="arrow-back-button">
                        <span className='material-icons-outlined'>arrow_back</span>
                    </Link>
                )}
                <img className='header-pokeball' src={PokeBall} alt='Pokeball image' />
            </section>
            <section className='flex justify-between items-center'>
                <h1 className='font-extrabold md:text-5xl text-3xl leading-relaxed py-3 md:px-4 px-16 md:w-10/12 w-full mx-auto'
                dangerouslySetInnerHTML={{ __html: title }}>
                </h1>
            </section>
        </header>
    );
};