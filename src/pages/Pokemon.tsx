import { useParams } from 'react-router-dom';
import './Pokemon.css';
import { useQueryClient } from '@tanstack/react-query';
import { QueryData } from '../components/pokedex/PokedexSearch';
import { PokemonCard } from '../components/pokemon/PokemonCard';

export const Pokemon = () => {

    const { name } = useParams();
    console.log('name', name);

    const queryClient = useQueryClient();
    const allPokemonPages: QueryData | undefined = queryClient.getQueryData(['fetch pokemons']);
    console.log('allPokemonPages', allPokemonPages);
    const selectedPokemon = allPokemonPages?.pages.map((page) =>
            page.filter((pokemon) => pokemon.name.toLowerCase() === name?.toLowerCase()).pop(),
    ).pop();
    console.log('selectedPokemon', selectedPokemon);

    return (
        <main className='pokemonContainer'>
            {
            selectedPokemon && <PokemonCard
                name={name!}
                id={selectedPokemon.id}
                types={selectedPokemon.types}
            />
            }
        </main>
    );
}
