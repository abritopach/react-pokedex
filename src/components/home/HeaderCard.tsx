import { Category } from "../../models/category.model";
import { Header } from "../common/header/Header";
import { SearchBar } from "../common/search-bar/SearchBar";
import { CategoryCard } from "./CategoryCard";

export const HeaderCard = () => {

    const categories: Category[] = [
        {color: '#4FC1A6FF', name: 'Pokedex', route: 'pokedex'},
        {color: '#FA6555FF', name: 'Moves', route: 'moves'},
        {color: '#429BEDFF', name: 'Abilities', route: 'abilities'},
        {color: '#F6C747FF', name: 'Items', route: 'items'},
        {color: '#7C538CFF', name: 'Locations', route: 'locations'},
        {color: '#B1736CFF', name: 'Type Effects', route: 'type_charts'},
    ];

    return (
        <article className='header-card'>
            <Header title="What Pokemon <br /> are you looking for?" />
            <SearchBar onChange={() => {}} />
            <section className='grid grid-cols-2 justify-items-center gap-x-2 md:gap-x-4 gap-y-6 px-3 md:w-1/2 w-full mx-auto md:pt-8 md:pb-16 pt-6 pb-12'>
                {categories?.map((category) => (
                    <CategoryCard key={category.name} category={category} />
                ))}
            </section>
        </article>
    );
};