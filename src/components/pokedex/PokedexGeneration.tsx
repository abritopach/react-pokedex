import "./PokedexGeneration.css";
import GenerationI from "../../assets/generation_I.png";
import GenerationII from "../../assets/generation_II.png";
import GenerationIII from "../../assets/generation_III.png";
import GenerationIV from "../../assets/generation_IV.png";
import GenerationV from "../../assets/generation_V.png";
import GenerationVI from "../../assets/generation_VI.png";
import GenerationVII from "../../assets/generation_VII.png";
import GenerationVIII from "../../assets/generation_VIII.png";
import { PokemonGenerationCard } from "./PokemonGenerationCard";
import { useEffect, useRef } from "react";

interface PropsPokedexGeneration {
    searchForGeneration: boolean;
    setSearchForGeneration: React.Dispatch<React.SetStateAction<boolean>>
}

export const PokedexGeneration = ({ searchForGeneration, setSearchForGeneration }: PropsPokedexGeneration) => {
    const Regions = [
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
            generation: "VI",
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
    ];

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (ref.current && !ref.current.contains(event.target as Node) &&
            !(event.target as Element).className.includes("hamburger")) {
                const menuBtn = document.querySelector(".menu-btn");
                if (menuBtn && menuBtn.classList.contains("is-active")) {
                    menuBtn.classList.remove("is-active");
                    setSearchForGeneration(false);
                }
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
            };
    });


    return (
        <section
            className={`${
                searchForGeneration
                    ? "generation-container active"
                    : "generation-container"
            }`}
        >
            <article ref={ref} className='generation-section'>
                <h1 className='text-lg font-extrabold pb-4'>Generation</h1>
                <article className='grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 justify-items-center gap-x-3 md:gap-x-4 md:gap-y-5 gap-y-3 md:w-11/12 w-full mx-auto pb-4 overflow-y-scroll h-full'>
                    {Regions.map((generation) => (
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
