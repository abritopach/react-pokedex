import { useState } from 'react';
import './PokemonTabs.css';
import { AboutTab } from './tabs/about/AboutTab';

export const PokemonTabs = () => {

    const [about] = useState(true);
    const [stats] = useState(false);
    const [evolution] = useState(false);
    const [moves] = useState(false);

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
            {about && (
                <AboutTab/>
            )}
        </section>
    );
};
