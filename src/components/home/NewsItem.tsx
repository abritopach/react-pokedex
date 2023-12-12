import { Card } from "flowbite-react";
import PokemonRush from "../../Assets/pokemon_rush.png";

export const NewsItem = () => {
    return (
        <Card className="mx-auto max-w-sm" imgSrc={PokemonRush} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Pokémon Rumble Rush Arrive Soon
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            15 May 2019
            </p>
        </Card>
    );
    {/*
        <figure className='w-full flex justify-between items-center py-8 border-b'>
            <figcaption className='leading-relaxed w-2/3'>
                <p className='font-medium md:text-lg lg:text-xl text-sm'>
                    Pokémon Rumble Rush Arrive Soon
                </p>
                <small className='lg:text-lg md:text-base text-xs'>
                    15 May 2019
                </small>
            </figcaption>
            <img
                className='pokeRush'
                src={PokemonRush}
                alt='Pokemon Rush Evolution'
            />
        </figure>
        */}
};
