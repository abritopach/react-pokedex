import { useState } from "react";
import "./FabMenu.css";
import { FabMenuButton } from "./FabMenuButton";
import { FabItem, FabItemProps } from "./FabItem";

export const FabMenu = () => {
    const [toggleFabMenu, setToggleFabMenu] = useState(false);

    const fabItems: FabItemProps[] = [
        {icon: 'favorite', title: 'Favorite Pokémon', onPress: handleOnPressEvent},
        {icon: 'filter_vintage', title: 'All Types', onPress: handleOnPressEvent},
        {icon: 'bolt', title: 'All Gen', onPress: handleOnPressEvent},
        {icon: 'search', title: 'Search', onPress: handleOnPressEvent},
    ];

    function handleOnPressEvent(title: string) {
        console.log('handleOnPressEvent', title);
    }

    return (
        <aside
            className={`${
                toggleFabMenu ? "fabMenu active md:text-base text-sm" : "fabMenu"
            }`}
        >
            <section>
                <FabMenuButton
                    toggleFabMenu={toggleFabMenu}
                    setToggleFabMenu={setToggleFabMenu}
                />
            </section>
            {toggleFabMenu ? (
                <article className='menuActive'>
                {
                    fabItems.map((item) => (
                        <FabItem key={item.title} title={item.title} icon={item.icon}
                        onPress={handleOnPressEvent}></FabItem>
                    ))
                }
                </article>
            ) : (
                ""
            )}
        </aside>
    );
};
