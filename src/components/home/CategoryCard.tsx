import { Link } from "react-router-dom";
import PokeBall from '../../assets/pokeball.png';
import "./CategoryCard.css";
import { Category } from "../../models/category.model";

interface CategoryCardProps {
    category: Category;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {

    return (
        <Link key={category.name} to={category.route} className='category-card' style={{backgroundColor: category.color}}>
            <figure>
                <img className='pokeball1 pokeball' src={PokeBall} alt='Pokeball' />
                <figcaption className='text-lg'>{category.name}</figcaption>
                <img className='pokeball2 pokeball' src={PokeBall} alt='Pokeball' />
            </figure>
        </Link>
    );
};
