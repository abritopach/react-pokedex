import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../../api/PokeApi";

export const useGetPokemons = () => {
    return useQuery({ queryKey: ['fetch pokemons'], queryFn: () => getPokemons({ limit: 100})});
}
