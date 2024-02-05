import Male from "../../../../assets/male.png";
import Female from "../../../../assets/female.png";
import { useFetchPokemonSpecies } from "../../../../hooks/custom/usePoke";

export const Breeding = () => {

    const { data } = useFetchPokemonSpecies("bulbasaur");
    console.log('data', data);

    //Get Gender
    const genderPercentage =
        data?.gender_rate !== -1
            ? (data?.gender_rate / 8) * 100
            : -1;

    return (
        <section className='text-base'>
            <h3 className='font-bold pt-6'>Breeding</h3>
            <article className='my-3'>
                <div className='flex items-center justify-start my-1'>
                    <p className='text-gray-400 font-medium mr-5'>Gender</p>
                    {genderPercentage === -1 ? (
                        "Genderless"
                    ) : (
                        <>
                            <figure className='flex items-center justify-center mx-3'>
                                <img
                                    className='w-5 h-5'
                                    src={Male}
                                    alt='Male symbol'
                                />
                                <figcaption className='pt-1.5 pl-2'>
                                    {100 - genderPercentage}%
                                </figcaption>
                            </figure>
                            <figure className='flex items-center justify-center mx-3'>
                                <img
                                    className='w-5 h-5'
                                    src={Female}
                                    alt='Female symbol'
                                />
                                <figcaption className='pt-1.5 pl-2'>
                                    {genderPercentage}%
                                </figcaption>
                            </figure>
                        </>
                    )}
                </div>
                <div className='flex items-center justify-start my-1.5'>
                    <p className='text-gray-400 font-medium mr-5'>Egg Groups</p>
                    {/*
                    {pokemonAbout.egg_groups.map((group, index) => (
                        <p key={index} className='mr-1 capitalize'>
                            {group.name},
                        </p>
                    ))}
                    */}
                </div>
                <div className='flex items-center justify-start my-2'>
                    <p className='text-gray-400 font-medium mr-5'>Egg Cycle</p>
                    {/*
                    {pokemonAbout.egg_groups.map((group, index) => (
                        <p key={index} className='mr-1 capitalize'>
                            {group.name},
                        </p>
                    ))}
                    */}
                </div>
            </article>
        </section>
    );
};