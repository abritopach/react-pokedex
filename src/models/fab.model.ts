export enum FabOptions {
    Favorite,
    Types,
    Generation,
    Search,
}

export interface PropsFabOption {
    clickOutside: (option: FabOptions) => void;
}

export interface FabMenuProps {
    items: Omit<FabItemProps, "onPress">[];
    onPress: (option: FabOptions) => void;
}

export interface FabItemProps {
    icon: 'favorite' | 'bolt' | 'filter_vintage' | 'search';
    title: string;
    key: FabOptions;
    onPress: (title: string) => void;
}