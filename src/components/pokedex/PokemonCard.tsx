import PokeBall from '../../assets/pokeball.png';
import { Type } from '../../models/pokemon.model';
import { pokemonMapColors } from '../../utils/Constants';
import './PokemonCard.css';

interface Props {
    id: number;
    name: string;
    types: Type[];
}

export const PokemonCard = ({id, name, types }: Props) => {

    const pokemonTypes = types.map((type) => type.type.name);
    console.log('pokemonTypes', pokemonTypes);
    const color = pokemonMapColors.get(pokemonTypes[0]);

    const styleBg = {
        backgroundColor: `${color}`,
    };

    return (
        <section
            className='pokemon-card cursor-pointer'
            style={styleBg}
        >
            <h2 className='capitalize font-bold tracking-tighter md:text-lg text-sm text-white'>
                {name}
            </h2>
            <h3>#{String(`${id}`).padStart(3, "0")}</h3>
            <figure className='flex items-center justify-center'>
                <figcaption className='flex flex-col  justify-center items-center w-1/2'>
                    {pokemonTypes.map((type, index) => (
                        <small
                            key={index}
                            className='my-1 rounded-full md:text-base text-xs type-name'
                        >
                            {type}
                        </small>
                    ))}
                </figcaption>
                <div className='w-1/2 relative'>
                    <img className='poke-ball' src={PokeBall} alt='Pokeball' />
                    <img
                        className='pokemon-img'
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                        alt={name}
                    />
                </div>
            </figure>
        </section>
    );
};