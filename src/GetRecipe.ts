import axios from 'axios';

export interface RecipeResponse {
    properties: {hits: RecipeItem[]};

}

export interface RecipeItem {
    hits: string;
    healthLabels: string;
    cuisineType: string;
    favorite: boolean;
}


// const getRecipe = async () => {
// try {
// const response = await axios.get({`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=5469f054&app_key=79d6e8b780f2ca65225e9566f8ac5b28`, options 
// params:{
// } catch (error) {
// console.error(error)
// }
// })

const getRecipe = async() => {
    const type = "";
    const q = "american";
    const app_id = "";
    const app_key = "";

    const url = (`https://api.edamam.com/api/recipes/v2?type=public&q=${q}&app_id=5469f054&app_key=79d6e8b780f2ca65225e9566f8ac5b28`)
    const response = await axios.get(url,
    {params: {type, q, app_id, app_key}});
    console.log(response.data.hits[0].recipe.cuisineType);
    return (
        response.data.hits
    )
    
      
}

export default getRecipe;