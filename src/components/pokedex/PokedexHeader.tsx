import { Link } from "react-router-dom";
import { MenuButton } from "../menu/MenuButton";

interface PropsMenuButton {
    searchForGeneration: boolean;
    setSearchForGeneration: React.Dispatch<React.SetStateAction<boolean>>
}

export const PokedexHeader = ({ setSearchForGeneration, searchForGeneration }: PropsMenuButton) => {
    const paddingStyle = {
        padding: "50px 27px 0",
    };

    return (
        <header className='sticky top-0 z-20 pb-2'>
            <section
                className='flex items-center justify-between'
                style={paddingStyle}
            >
                <Link to='/'>
                    <span className='material-icons-outlined'>arrow_back</span>
                </Link>
                <MenuButton
                    setSearchForGeneration={setSearchForGeneration}
                    searchForGeneration={searchForGeneration}
                />
            </section>
            <section className='flex justify-between items-center'>
                <h1 className='pl-4 md:pl-16 text-3xl font-bold tracking-tighter py-5'>
                    Pokedex
                </h1>
            </section>
        </header>
    );
};
