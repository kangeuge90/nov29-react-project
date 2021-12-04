import './DisplayContainer.css'
import american from './assets/american-cusine.jpg'
import indian from './assets/indian-cusine.jpg'
import mexican from './assets/mexican-cusine.jpg';
import italian from './assets/italian-cusine.png';
import asian from './assets/asian.jpg';
import getRecipe from './GetRecipe';
import {useState} from 'react';
import Recipe from './recipe';

function DisplayCuisine() {

    const [query, setQuery] = useState('');

    return(
        <div>
    <div className="categoryPicturesContainer">
        <div className="categoryPicture" onClick = {() => {setQuery('american')}}>
        
            <h3>American</h3>
            <img src={american} alt="american food"> </img>
            
        </div>
        <div className="categoryPicture" onClick = {() => {setQuery('indian')}}>
            <h3>Indian</h3>
            <img src={indian}></img>
        </div>
        <div className="categoryPicture" onClick = {() => {setQuery('mexican')}}>
            <h3>Mexican</h3>
            <img src={mexican}></img>
        </div>
        <div className="categoryPicture" onClick = {() => {setQuery('italian')}}>
            <h3>Italian</h3>
            <img src={italian}></img>
        </div>
        <div className="categoryPicture" onClick = {() => {setQuery('asian')}}>
            <h3>Asian</h3>
            <img src={asian}></img>
        </div>
    </div>
    <div className='recipeList'>
    <Recipe query={query}/>
    </div>
    </div>
    )
}

export default DisplayCuisine;