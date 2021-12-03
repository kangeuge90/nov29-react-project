import axios from 'axios';

export interface RecipeResponse {
    properties: {hits: RecipeItem[]};

}

export interface RecipeItem {
    hits: string;
    label: string;
    healthLabels: string;
    cuisineType: string;
    thumbNail: string;
    // favorite: boolean;
}




const getRecipe = async() => {
    const type = "";
    const q = "";
    const app_id = "";
    const app_key = "";

    const url = (`https://api.edamam.com/api/recipes/v2?type=public&q=american&app_id=5469f054&app_key=79d6e8b780f2ca65225e9566f8ac5b28`)
    const response = await axios.get(url,
    {params: {type, q, app_id, app_key}});
    console.log(response.data.hits);
    return (
        response.data.hits.map((item: any) => {
            return{...item.recipe, thumbNail: item.recipe.images?.REGULAR?.url || 'No Image Available'}})
    )
    
      
}

export default getRecipe;