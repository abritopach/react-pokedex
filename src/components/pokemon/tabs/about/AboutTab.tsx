import { useFetchPokemonSpecies } from "../../../../hooks/custom/usePoke";
import { Breeding } from "./Breeding";
import { Size } from "./Size";

export const AboutTab = () => {

    const { data } = useFetchPokemonSpecies("bulbasaur");
    console.log('data', data);


    return (
        <section>
            <h1 className='text-justify'>
                {
                    data?.flavor_text_entries.find(
                        (text) => text.language.name === "en"
                    )?.flavor_text
                }
            </h1>
            <Size />
            <Breeding />
        </section>
    );
};