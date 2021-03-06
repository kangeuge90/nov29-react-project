import { useState, useEffect } from "react";
import getRecipe from "./GetRecipe";
import { RecipeItem } from "./GetRecipe";
import {Link} from 'react-router-dom';

export interface Props {
query: string;
}

function Recipe({query}: Props) {
    useEffect(() => {
        getRecipe(query).then(data => setRecipe(data));
        }, [query])

    const [recipe, setRecipe] = useState<RecipeItem[]>([])
    
    return (
        <ul>
            {
           recipe.map((item, index) => <div key={index}><p>{item.hits}</p><p>{item.label}</p><p>Cuisine Type: {item.cuisineType}</p><p>{item.healthLabels[0]}, {item.healthLabels[1]}, {item.healthLabels[2]}</p><img src={item.thumbNail}></img><Link to={item.label}>More Details</Link>
           </div>)
          
            
           }
            
        </ul>
    )
}

export default Recipe;