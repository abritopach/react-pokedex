import { Link } from "react-router-dom";
import Pokeball from "../../assets/pokeball.png";
import { PropsPokemonCard } from "../pokedex/PokemonCard";
import './PokemonCard.css';
import { pokemonMapColors } from "../../utils/Constants";

export const PokemonCard = ({ name, id, types }: PropsPokemonCard) => {

    const pokemonTypes = types.map((type) => type.type.name);
    const color = pokemonMapColors.get(pokemonTypes[0]);

    const styleBg = {
        backgroundColor: `${color}`,
    };

    return (
        <section className='pokeCard' style={styleBg}>
            <section className='flex justify-between items-center pb-5 pt-8 relative'>
                <Link to='/Pokedex' className='backBg'>
                    <span className='material-icons-outlined'>arrow_back</span>
                </Link>
                <span
                    className='material-icons-outlined cursor-pointer'
                >
                    favorite_border
                </span>
            </section>
            <figure className='flex flex-col items-center justify-center w-full'>
                <figcaption className='flex flex-col justify-between items-start w-full'>
                    <div className='flex justify-between items-center w-full'>
                        <h1 className='capitalize text-3xl font-extrabold tracking-wider'>
                            {name}
                        </h1>
                        <span className='font-bold'>
                            #{String(`${id}`).padStart(3, "0")}
                        </span>
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex items-center'>
                            {types.map((type, index) => (
                                <small
                                    key={index}
                                    className='my-2 mx-1 rounded-full md:text-base text-sm typeName'
                                >
                                    {type.type.name}
                                </small>
                            ))}
                        </div>
                    </div>
                </figcaption>
                <div className='relative flex justify-center items-center overflow-hidden w-full'>
                    <img
                        className='relative z-10 w-1/5 -bottom-4'
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                        alt={name}
                    />
                    <img
                        className='pokemonBg rotar'
                        src={Pokeball}
                        alt='Pokeball'
                    />
                </div>
            </figure>
        </section>
    );
};
