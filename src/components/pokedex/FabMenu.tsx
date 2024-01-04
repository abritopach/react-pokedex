import { useState } from "react";
import "./FabMenu.css";
import { FabMenuButton } from "./FabMenuButton";
import { FabItem, FabItemProps } from "./FabItem";

export interface FabMenuProps {
    onPress: (title: string) => void;
}

export const FabMenu = ({onPress}: FabMenuProps) => {
    const [toggleFabMenu, setToggleFabMenu] = useState(false);

    const fabItems: FabItemProps[] = [
        {icon: 'favorite', title: 'Favorite Pokémon', onPress},
        {icon: 'filter_vintage', title: 'All Types', onPress},
        {icon: 'bolt', title: 'All Gen', onPress},
        {icon: 'search', title: 'Search', onPress},
    ];

    function handleOnPressEvent(title: string) {
        setToggleFabMenu(!toggleFabMenu);
        const menuBtn = document.querySelector(".menuList");
        menuBtn?.classList.remove("is-active");
        onPress(title);
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
