import { FabItemProps } from "../../../models/fab.model";

export const FabItem = ({icon, title, onPress}: FabItemProps) => {
    return (
        <button className='fabItem' onClick={() => onPress(title)}>
            <p>{title}</p>
            <span className='material-icons-outlined icon'>{icon}</span>
        </button>
    );
};
