
import Pokeball from "../../assets/pokeball.png";

interface PropsPokemonGenerationCard {
    img: string;
    generation: string;
    limit: number;
    offset: number;
}

export const PokemonGenerationCard = ({ img, generation, limit, offset }: PropsPokemonGenerationCard) => {

    console.log('limit', limit);
    console.log('offset', offset);

    return (
        <figure className='generationCard'>
            <img className='generationPoke' src={Pokeball} alt='Pokeball' />
            <figcaption className='md:text-base text-xs text-center font-medium'>
                Generation {generation}
            </figcaption>
            <img
                className='generationGroup w-11/12 mx-auto'
                src={img}
                alt='Pokemon Generation'
            />
        </figure>
    );
};
