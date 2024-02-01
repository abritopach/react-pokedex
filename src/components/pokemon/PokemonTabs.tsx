import { useState } from 'react';
import './PokemonTabs.css';

export const PokemonTabs = () => {

    const [about, setAbout] = useState(true);
    const [stats, setStats] = useState(false);
    const [evolution, setEvolution] = useState(false);
    const [moves, setMoves] = useState(false);

    return (
        <section className='pokeDetails'>
            <section className='flex items-center justify-between border-b mb-4 text-sm w-full'>
                <button
                    className={`${about ? "detailsBtn active" : "detailsBtn"}`}
                >
                    About
                </button>
                <button
                    className={`${stats ? "detailsBtn active" : "detailsBtn"}`}
                >
                    Base Stats
                </button>
                <button
                    className={`${
                        evolution ? "detailsBtn active" : "detailsBtn"
                    }`}
                >
                    Evolution
                </button>
                <button
                    className={`${moves ? "detailsBtn active" : "detailsBtn"}`}
                >
                    Moves
                </button>
            </section>
        </section>
    );
};
