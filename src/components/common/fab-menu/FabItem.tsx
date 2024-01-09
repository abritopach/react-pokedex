import { FabItemProps } from "../../../models/fab.model";

export const FabItem = ({key, icon, title, onPress}: FabItemProps) => {
    return (
        <button key={key} className='fabItem' onClick={() => onPress(title)}>
            <p>{title}</p>
            <span className='material-icons-outlined icon'>{icon}</span>
        </button>
    );
};
