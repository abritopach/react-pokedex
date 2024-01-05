export interface FabItemProps {
    icon: 'favorite' | 'bolt' | 'filter_vintage' | 'search';
    title: string;
    onPress: (title: string) => void;
}

export const FabItem = ({icon, title, onPress}: FabItemProps) => {
    return (
        <button className='fabItem' onClick={() => onPress(title)}>
            <p>{title}</p>
            <span className='material-icons-outlined icon'>{icon}</span>
        </button>
    );
};
