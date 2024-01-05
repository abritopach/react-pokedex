import "./FabMenuButton.css";

interface FabMenuButtonProps {
    toggleFabMenu: boolean;
    setToggleFabMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FabMenuButton = ({ toggleFabMenu, setToggleFabMenu}: FabMenuButtonProps) => {
    const handleClick = () => {
        const menuBtn = document.querySelector(".menuList");

        if (menuBtn?.classList.contains("is-active")) {
            menuBtn.classList.remove("is-active");
        } else {
            menuBtn?.classList.add("is-active");
        }

        setToggleFabMenu(!toggleFabMenu);
    };

    return (
        <button
            className='hamburger-list hamburger--vortex menuList'
            type='button'
            onClick={handleClick}
        >
            <span className='hamburger-list--box'>
                <span className='hamburger-list-inner'></span>
            </span>
        </button>
    );
};
