import { useParams } from 'react-router-dom';
import './Pokemon.css';
import { PokemonCard } from '../components/pokemon/PokemonCard';
import { useFetchPokemon } from '../hooks/custom/usePoke';
import { Loading } from '../components/loading/Loading';

export const Pokemon = () => {

    const { name } = useParams();
    console.log('name', name);

    const { data, isLoading } = useFetchPokemon(name ?? '');
    const selectedPokemon = data;
    console.log('selectedPokemon', selectedPokemon);

    return (
        <>
        {isLoading && <Loading />}
        <main className='pokemonContainer'>
            {
            selectedPokemon && <PokemonCard
                name={name!}
                id={selectedPokemon.id}
                types={selectedPokemon.types}
            />
            }
        </main>
        </>
    );
}
