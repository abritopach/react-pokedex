import { PokedexContainer } from "../components/pokedex/PokedexContainer";
import './Pokedex.css';
import { Header } from "../components/common/header/Header";
import { FabMenu } from "../components/common/fab-menu/FabMenu";
import { useState } from "react";
import { PokedexGeneration } from "../components/pokedex/PokedexGeneration";
import { FabItemProps } from "../components/common/fab-menu/FabItem";

export const Pokedex = () => {

    // const [fabMenuOption, setFabMenuOption] = useState('');
    const [searchForGeneration, setSearchForGeneration] = useState(false);

    const fabItems: Omit<FabItemProps, "onPress">[] = [
        {icon: 'favorite', title: 'Favorite Pokémon'},
        {icon: 'filter_vintage', title: 'All Types'},
        {icon: 'bolt', title: 'All Gen'},
        {icon: 'search', title: 'Search'},
    ];

    function handleOnPressEvent(title: string) {
        console.log('handleOnPressEvent', title);
        // setFabMenuOption(title);
        switch(title) {
            case "All Gen": {
                setSearchForGeneration(!searchForGeneration);
            }
        }
    }

    /*
    const renderFabMenuOption  = () => {
        console.log("renderFabMenuOption");
        switch(fabMenuOption) {
            case "All Gen": {
                return <PokedexGeneration searchForGeneration={searchForGeneration} setSearchForGeneration={setSearchForGeneration} />;
            }
            default: return;
        }
    }
    */

    return (
        <section className='pokedex relative'>
            <Header title="Pokedex" showArrowBack={true} />
            <FabMenu items={fabItems} onPress={handleOnPressEvent} />
            <PokedexContainer />
            { /*
            { renderFabMenuOption() }
            */ }
            {searchForGeneration && (
                <PokedexGeneration setSearchForGeneration={setSearchForGeneration} searchForGeneration={searchForGeneration} />
            )}
        </section>
    );
}
