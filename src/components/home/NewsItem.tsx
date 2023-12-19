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
};
