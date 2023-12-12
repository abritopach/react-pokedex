import "./MenuButton.css";

interface PropsMenuButton {
    searchForGeneration: boolean;
    setSearchForGeneration: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuButton = ({ setSearchForGeneration, searchForGeneration }: PropsMenuButton) => {
    const handleClick = () => {
        const menuBtn = document.querySelector(".menu-btn");

        if (menuBtn && menuBtn.classList.contains("is-active")) {
            menuBtn.classList.remove("is-active");
        } else {
            menuBtn && menuBtn.classList.add("is-active");
        }

        setSearchForGeneration(!searchForGeneration);
    };

    return (
        <button
            className='hamburger hamburger--emphatic menu-btn'
            type='button'
            onClick={handleClick}
        >
            <span className='hamburger-box'>
                <span className='hamburger-inner'></span>
            </span>
        </button>
    );
};
