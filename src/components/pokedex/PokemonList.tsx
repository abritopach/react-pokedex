import React, { useEffect, useRef } from "react";
import { useFetchPokemons } from "../../hooks/custom/usePoke";
import { Loading } from "../loading/Loading";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = () => {

    const { data, fetchNextPage, isLoading, isFetchingNextPage } = useFetchPokemons({});
    const loaderRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const target = entries[0];
            if ((target.isIntersecting) && (document.getElementsByClassName('searchBar').length === 0)
            && (document.getElementsByClassName('typesFilter').length === 0)) {
                fetchNextPage();
            }
        });

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [fetchNextPage]);

    return (
        <>
            <section className='grid grid-cols-2 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 justify-items-center gap-x-2 md:gap-x-4 md:gap-y-5 gap-y-2 md:w-11/12 w-full mx-auto pt-10 pb-10 z-10'>
                {isLoading && <Loading />}
                {data?.pages.map((page, i) => (
                    <React.Fragment key={i}>
                    { page.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.id}
                            name={pokemon.name}
                            id={pokemon.id}
                            types={pokemon.types}
                        />
                    ))}
                    </React.Fragment>
                ))}
                <div ref={loaderRef}>
                    {isFetchingNextPage ? <Loading /> : null}
                </div>
            </section>
        </>
    );
};

