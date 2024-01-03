import { useState } from "react";
import "./FabMenu.css";
import { FabMenuButton } from "./FabMenuButton";
import { FabItem } from "./FabItem";

export const FabMenu = () => {
    const [toggleFabMenu, setToggleFabMenu] = useState(false);

    const fabItems =  [...Array(4)].map((_,i) => i);

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
                fabItems.map((item) => (
                    <FabItem  key={item}></FabItem>
                ))
            ) : (
                ""
            )}
        </aside>
    );
};
