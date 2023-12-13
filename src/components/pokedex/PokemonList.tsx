import { useGetPokemons } from "../../hooks/custom/usePoke";
import { Loading } from "../loading/Loading";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = () => {

    const { data, isLoading } = useGetPokemons({limit: 151});

    return (
        <>
            <section className='grid grid-cols-2 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 justify-items-center gap-x-2 md:gap-x-4 md:gap-y-5 gap-y-2 md:w-11/12 w-full mx-auto pt-10 pb-10 z-10'>
                {isLoading && <Loading />}
                {data?.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        name={pokemon.name}
                        id={pokemon.id}
                        types={pokemon.types}
                />
                ))}
            </section>
        </>
    );
};

