import "./PokedexGeneration.css";
import GenerationI from "../../assets/generation_I.png";
import GenerationII from "../../assets/generation_II.png";
import GenerationIII from "../../assets/generation_III.png";
import GenerationIV from "../../assets/generation_IV.png";
import GenerationV from "../../assets/generation_V.png";
import GenerationVI from "../../assets/generation_VI.png";
import GenerationVII from "../../assets/generation_VII.png";
import GenerationVIII from "../../assets/generation_VIII.png";
import GenerationIX from "../../assets/generation_IX.png";
import AllGenerations from "../../assets/all_generations.png";
import { PokemonGenerationCard } from "./PokemonGenerationCard";
import { useOutsideClick } from "../../hooks/custom/useOutsideClick";
import { FabOptions, PropsFabOption } from "../../models/fab.model";

export const PokedexGeneration = ({clickOutside}: PropsFabOption) => {
    const regions = [
        {
            name: "Kanto",
            generation: "I",
            limit: 151,
            offset: 0,
            img: `${GenerationI}`,
        },
        {
            name: "Johto",
            generation: "II",
            limit: 100,
            offset: 151,
            img: `${GenerationII}`,
        },
        {
            name: "Hoenn",
            generation: "III",
            limit: 135,
            offset: 251,
            img: `${GenerationIII}`,
        },
        {
            name: "Sinnoh",
            limit: 108,
            generation: "IV",
            offset: 386,
            img: `${GenerationIV}`,
        },
        {
            name: "Unova",
            generation: "V",
            limit: 155,
            offset: 494,
            img: `${GenerationV}`,
        },
        {
            name: "Kalos",
            limit: 72,
            generation: "VI",
            offset: 649,
            img: `${GenerationVI}`,
        },
        {
            name: "Alola",
            limit: 88,
            generation: "VII",
            offset: 721,
            img: `${GenerationVII}`,
        },
        {
            name: "Galar",
            limit: 89,
            generation: "VIII",
            offset: 809,
            img: `${GenerationVIII}`,
        },
        {
            name: "Paldea",
            limit: 121,
            generation: "IX",
            offset: 905,
            img: `${GenerationIX}`,
        },
        {
            name: "All",
            limit: 25,
            generation: "All (I - IX)",
            offset: 0,
            img: `${AllGenerations}`,
        },
    ];

    const handleClickOutside = () => {
        clickOutside(FabOptions.Generation);
    };
    const ref = useOutsideClick(handleClickOutside);

    return (
        <section
            className="generation-container active"
        >
            <article ref={ref} className='generation-section'>
                <h1 className='text-lg font-extrabold pb-4'>Generation</h1>
                <article className='grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 justify-items-center gap-x-3 md:gap-x-4 md:gap-y-5 gap-y-3 md:w-11/12 w-full mx-auto pb-4 overflow-y-scroll h-full'>
                    {regions.map((generation) => (
                        <PokemonGenerationCard
                            key={generation.name}
                            generation={generation.generation}
                            img={generation.img}
                            limit={generation.limit}
                            offset={generation.offset}
                        />
                    ))}
                </article>
            </article>
        </section>
    );
};
