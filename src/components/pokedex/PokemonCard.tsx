import PokeBall from '../../assets/pokeball.png';
import './PokemonCard.css';

interface Props {
    name: string;
}

export const PokemonCard = ({ name }: Props) => {

    const types = ["Grass", "Poisson"];

    const color = "#55c5ab";
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
            <h3>#{String(1).padStart(3, "0")}</h3>
            <figure className='flex items-center justify-center'>
                <figcaption className='flex flex-col  justify-center items-center w-1/2'>
                    {types.map((type, index) => (
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
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`}
                        alt={name}
                    />
                </div>
            </figure>
        </section>
    );
};