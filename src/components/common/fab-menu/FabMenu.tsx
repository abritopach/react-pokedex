import { useState } from "react";
import "./FabMenu.css";
import { FabMenuButton } from "./FabMenuButton";
import { FabItem } from "./FabItem";
import { FabMenuProps, FabOptions } from "../../../models/fab.model";

export const FabMenu = ({items, onPress}: FabMenuProps) => {
    const [toggleFabMenu, setToggleFabMenu] = useState(false);

    function handleOnPressEvent(option: FabOptions) {
        setToggleFabMenu(!toggleFabMenu);
        const menuBtn = document.querySelector(".menuList");
        menuBtn?.classList.remove("is-active");
        onPress(option);
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
                    items.map((item) => (
                        <FabItem key={item.key} title={item.title} icon={item.icon}
                        onPress={() => handleOnPressEvent(item.key)}></FabItem>
                    ))
                }
                </article>
            ) : (
                ""
            )}
        </aside>
    );
};
