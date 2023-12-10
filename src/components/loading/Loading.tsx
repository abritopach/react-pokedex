import PikachuLoading from "../../assets/pikachu_loading.gif";
import "./Loading.css";

export const Loading = () => {
    return (
        <figure className='loader'>
            <img className='scale-150' src={PikachuLoading} alt='Running Pikachu' />
            <figcaption className='pt-4 ml-4 text-xl'>Loading ...</figcaption>
        </figure>
    );
};
