import { NewsItem } from "./NewsItem";

export const PokemonNews = () => {

    const newsItems =  [...Array(6)].map((_,i) => i);

    return (
        <section className='md:pt-16 pt-10 px-4 md:w-11/12 mx-auto w-full'>
            <div className='flex justify-between items-center sticky top-0'>
                <h2 className='font-bold tracking-wide md:text-3xl text-xl'>
                    Pokémon News
                </h2>
                <button className='font-medium md:text-lg text-base pt-1.5'>
                    View All
                </button>
            </div>
            <section className='my-2'>
                { newsItems.map((item) => (
                    <NewsItem key={item} />
                ))}
            </section>
        </section>
    );
};
