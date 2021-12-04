import './DisplayContainer.css'
import nut from './assets/peanut-allergy.jpg';
import gluten from './assets/gluten-free.jpg';
import fish from './assets/seafood-allergy.png';
import dairy from './assets/dairy-free.png'; 
import soy from './assets/soyFree.png'
import Recipe from './recipe' ;
import {useState} from 'react';

function DisplayAllergies() {
    const [query, setQuery] = useState('');

    return(
        <div>
    <div className="categoryPicturesContainer" onClick = {() => {setQuery('nut-free')}}>
        <div className="categoryPicture">
            <h3>Nut Allergies</h3>
            <img src={nut} alt="american food"/>
        </div>
        <div className="categoryPicture" onClick = {() => {setQuery('gluten free')}}>
            <h3>Gluten Free</h3>
            <img src={gluten}></img>
        </div>
        <div className="categoryPicture" onClick = {() => {setQuery('shellfish free')}}>
            <h3>Seafood Allergy</h3>
            <img src={fish}></img>
        </div>
        <div className="categoryPicture" onClick = {() => {setQuery('dairy-free')}}>
            <h3>Dairy Allergy</h3>
            <img src={dairy}></img>
        </div>
        <div className="categoryPicture" onClick = {() => {setQuery('soy-free')}}>
            <h3>Soy Allergy</h3>
            <img src={soy}></img>
        </div>
    </div>
    <div className='recipeList'>
    <Recipe query={query}/>
    </div>
    </div>
    )
}

export default DisplayAllergies;