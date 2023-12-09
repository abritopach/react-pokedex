import { useGetPokemons } from "../../hooks/custom/usePoke";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = () => {

    const { data } = useGetPokemons();

    return (
        <section className='grid grid-cols-2 justify-items-center gap-x-2 md:gap-x-4 md:gap-y-5 gap-y-2 md:w-11/12 w-full mx-auto pb-10 z-10'>
            <h1>Pokemon list</h1>
            {data?.results?.map((pokemon) => (
                <PokemonCard
                    key={pokemon.name}
                    name={pokemon.name}
            />
            ))}
        </section>
    );
};

