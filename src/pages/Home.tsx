import PokeBall from '../assets/pokeball.png';

export const Home = () => {
    return (
        <section className='relative overflow-hidden homeBg'>
            <article className='homeMenu pt-16'>
                <figure className='relative'>
                    <img className='homeImg' src={PokeBall} alt='Pokeball bg' />
                    <figcaption className='font-extrabold md:text-5xl text-2xl leading-relaxed py-3 px-4 md:w-11/12 w-full mx-auto'>
                        What Pokemon <br /> are you looking for?
                    </figcaption>
                </figure>
            </article>
        </section>
    );
}