
import Pokeball from "../../assets/pokeball.png";
import { useGetPokemons } from "../../hooks/custom/usePoke";
import { Loading } from "../loading/Loading";

interface PropsPokemonGenerationCard {
    img: string;
    generation: string;
    limit: number;
    offset: number;
    setSearchForGeneration: React.Dispatch<React.SetStateAction<boolean>>
}

export const PokemonGenerationCard = ({ img, generation, limit, offset, setSearchForGeneration }: PropsPokemonGenerationCard) => {

    const { isFetching, refetch } = useGetPokemons({limit, offset});

    const onClickGenerationHandlerClick = () => {
        refetch();
        setSearchForGeneration(false);
    };

    return (
        <>
            {isFetching && <Loading />}
            <figure className='generation-card' onClick={onClickGenerationHandlerClick}>
                <img className='generation-poke' src={Pokeball} alt='Pokeball' />
                <figcaption className='md:text-base text-xs text-center font-medium'>
                    Generation {generation}
                </figcaption>
                <img
                    className='generationGroup w-11/12 mx-auto'
                    src={img}
                    alt='Pokemon Generation'
                />
            </figure>
        </>
    );
};
