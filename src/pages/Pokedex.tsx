import { PokedexContainer } from "../components/pokedex/PokedexContainer";
import './Pokedex.css';
import { Header } from "../components/common/header/Header";
import { FabMenu } from "../components/common/fab-menu/FabMenu";
import { useState } from "react";
import { PokedexGeneration } from "../components/pokedex/PokedexGeneration";
import { PokedexSearch } from "../components/pokedex/PokedexSearch";
import { FabItemProps, FabOptions } from "../models/fab.model";
import { PokedexTypes } from "../components/pokedex/PokedexTypes";

export const Pokedex = () => {

    const mapFabOptions = new Map([
        [FabOptions.Favorite, false],
        [FabOptions.Types, false],
        [FabOptions.Generation, false],
        [FabOptions.Search, false],
    ]);
    const [selectedFabOption, setSelectedFabOption] = useState(mapFabOptions);
    const updateSelectedFabOption = (key: FabOptions, value: boolean) => {
        setSelectedFabOption(new Map(mapFabOptions.set(key, value)));
    }

    const fabItems: Omit<FabItemProps, "onPress">[] = [
        {icon: 'favorite', title: 'Favorite Pokémon', key: FabOptions.Favorite },
        {icon: 'filter_vintage', title: 'All Types', key: FabOptions.Types},
        {icon: 'bolt', title: 'All Gen', key: FabOptions.Generation},
        {icon: 'search', title: 'Search', key: FabOptions.Search},
    ];

    const handleOnPressEvent = (option: FabOptions) => {
        updateSelectedFabOption(option, true);
    }

    const handleClickOutside = (option: FabOptions) => {
        console.log('click outside', option);
        updateSelectedFabOption(option, false);
    };

    /*
    const renderFabMenuOption  = () => {
        if (selectedFabOption.get(FabOptions.Generation)) {
            return <PokedexGeneration clickOutside={handleClickOutside} />
        }
        if (selectedFabOption.get(FabOptions.Search)) {
            return <PokedexSearch clickOutside={handleClickOutside} />
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
            {selectedFabOption.get(FabOptions.Types) && (
                <PokedexTypes clickOutside={handleClickOutside} />
            )}
            {selectedFabOption.get(FabOptions.Generation) && (
                <PokedexGeneration clickOutside={handleClickOutside} />
            )}
            {selectedFabOption.get(FabOptions.Search) && (
                <PokedexSearch clickOutside={handleClickOutside} />
            )}
        </section>
    );
}
