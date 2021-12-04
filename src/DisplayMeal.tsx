import './DisplayContainer.css'
import breakfast from './assets/breakfast.jpg';
import lunch from './assets/lunch.jpg';
import brunch from './assets/brunch.jpeg';
import dinner from './assets/dinner.jpg';
import dessert from './assets/Desserts.jpg';
import Recipe from './recipe';
import {useState} from 'react';

function DisplayMeal() {

    const [query, setQuery] = useState('');

    return(
        <div>
    <div className="categoryPicturesContainer" onClick = {() => {setQuery('breakfast')}}>
        <div className="categoryPicture">
            <h3>Breakfast</h3>
            <img src={breakfast} alt="american food"/>
        </div>
        <div className="categoryPicture" onClick = {() => {setQuery('brunch')}}>
            <h3>Brunch</h3>
            <img src={brunch}></img>
        </div>
        <div className="categoryPicture" onClick = {() => {setQuery('lunch')}}>
            <h3>Lunch</h3>
            <img src={lunch}></img>
        </div>
        <div className="categoryPicture" onClick = {() => {setQuery('dinner')}}>
            <h3>Dinner</h3>
            <img src={dinner}></img>
        </div>
        <div className="categoryPicture" onClick = {() => {setQuery('dessert')}}>
            <h3>Dessert</h3>
            <img src={dessert}></img>
        </div>
    </div>
    <div className='recipeList'>
    <Recipe query={query}/>
    </div>
    </div>
    )
}

export default DisplayMeal;