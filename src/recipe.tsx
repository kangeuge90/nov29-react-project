import { useState, useEffect } from "react";
import getRecipe from "./GetRecipe";
import { RecipeItem } from "./GetRecipe";
function Recipe() {
    useEffect(() => {
        getRecipe().then(data => console.log(data));
        }, [])

    const [recipe, setRecipe] = useState<RecipeItem[]>([])
    
    return (
        <ul>
            {
           recipe.map((item, index) => <div key={index}>{item.hits}</div>)
            //    return <div>
            //    {/* <li> {w.recipe} </li> 
            //    <p>{w.healthLabels}</p>
            //    <p>{w.cuisineType}</p> */}
            //    {w.hits}
            //     </div>
            
           }
            
        </ul>
    )
}

export default Recipe;