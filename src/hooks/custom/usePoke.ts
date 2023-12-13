import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../../api/PokeApi";

export const useGetPokemons = ({limit = 24, offset = 0}) => {
    return useQuery({ queryKey: ['fetch pokemons'], queryFn: () => getPokemons({ limit, offset})});
}
