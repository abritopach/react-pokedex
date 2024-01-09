import { Colors } from "../../constants/colors";
import "./PokedexTypes.css";

import { PokemonType } from "../../models/pokemon-type.model";

import Bug from "../../assets/types/bug.png";
import Dark from "../../assets/types/dark.png";
import Dragon from "../../assets/types/dragon.png";
import Electric from "../../assets/types/electric.png";
import Fairy from "../../assets/types/fairy.png";
import Fighting from "../../assets/types/fighting.png";
import Fire from "../../assets/types/fire.png";
import Flying from "../../assets/types/flying.png";
import Ghost from "../../assets/types/ghost.png";
import Grass from "../../assets/types/grass.png";
import Ground from "../../assets/types/ground.png";
import Ice from "../../assets/types/ice.png";
import Normal from "../../assets/types/normal.png";
import Poison from "../../assets/types/poison.png";
import Psychic from "../../assets/types/psychic.png";
import Rock from "../../assets/types/rock.png";
import Steel from "../../assets/types/steel.png";
import Water from "../../assets/types/water.png";
import { useQueryClient } from "@tanstack/react-query";
import { QueryData } from "./PokedexSearch";
import { Pokemon } from "../../models/pokemon.model";
import { FabOptions, PropsFabOption } from "../../models/fab.model";
import { useOutsideClick } from "../../hooks/custom/useOutsideClick";

export const PokedexTypes = ({clickOutside}: PropsFabOption) => {

    const types: PokemonType[] = [
        { name: "grass", color: Colors.grass, route: Grass},
        { name: "fire", color: Colors.fire, route: Fire},
        { name: "water", color: Colors.water, route: Water},
        { name: "electric", color: Colors.electric, route: Electric},
        { name: "bug", color: Colors.bug, route: Bug},
        { name: "poison", color: Colors.poison, route: Poison},
        { name: "flying", color: Colors.flying, route: Flying},
        { name: "normal", color: Colors.normal, route: Normal},
        { name: "ground", color: Colors.ground, route: Ground},
        { name: "fairy", color: Colors.fairy, route: Fairy},
        { name: "fighting", color: Colors.fighting, route: Fighting},
        { name: "psychic", color: Colors.psychic, route: Psychic},
        { name: "rock", color: Colors.rock, route: Rock},
        { name: "ice", color: Colors.ice, route: Ice},
        { name: "dragon", color: Colors.dragon, route: Dragon},
        { name: "dark", color: Colors.dark, route: Dark},
        { name: "ghost", color: Colors.ghost, route: Ghost},
        { name: "steel", color: Colors.steel, route: Steel},
    ];

    const queryClient = useQueryClient();
    const allPokemonPages: QueryData | undefined = queryClient.getQueryData(['fetch pokemons']);
    const newPagesArray = (type: string) => {
        if (type === 'all') return allPokemonPages?.pages;
        return allPokemonPages?.pages.map((page) =>
            page.filter((pokemon: Pokemon) => {
                const species = pokemon.types.map((type) => type.type);
                if (species.map(specie => specie.name).includes(type)) {
                    return pokemon;
                }
            }),
    ) ?? []
    };

    const filterPokemons = (type: string) => {
        console.log('filterPokemons', type);
        queryClient.setQueryData(['fetch pokemons'], (data: QueryData) => ({
            pages: newPagesArray(type),
            pageParams: data.pageParams,
        }));
    };

    const handleClickOutside = () => {
        clickOutside(FabOptions.Types);
    };
    const ref = useOutsideClick(handleClickOutside);

    return (
        <section
            className="typesContainer active"
        >
            <article ref={ref} className='typesFilter overflow-scroll'>
                <div className='flex items-center justify-between mb-5'>
                    <h2 className='text-lg pl-6 font-medium'>Types List:</h2>
                </div>
                <div className='grid grid-cols-2 xl:grid-cols-10 md:grid-cols-8 sm:grid-cols-3 justify-items-center gap-x-2 gap-y-3 mx-auto z-10'>
                    <button onClick={() => filterPokemons('all')}
                    className='font-medium border px-5 rounded-lg h-10 flex items-center justify-center'>
                        All Types
                    </button>
                {
                    types.map((type) => (
                        <figure
                            key={type.name}
                            onClick={() => filterPokemons(type.name)}
                            className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                            style={{ backgroundColor: `${type.color}` }}
                        >
                            <img className='w-6 p-1 h-6' src={type.route} alt='Grass' />
                            <figcaption className='pl-1 text-white pr-1.5'>
                                { type.name }
                            </figcaption>
                        </figure>
                    ))
                }
                </div>
            </article>
        </section>
    );
};