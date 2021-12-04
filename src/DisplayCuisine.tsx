import './DisplayContainer.css'
import american from './assets/american-cusine.jpg'
import indian from './assets/indian-cusine.jpg'
import mexican from './assets/mexican-cusine.jpg';
import italian from './assets/italian-cusine.png';
import asian from './assets/asian.jpg';
import {Link} from 'react-router-dom';
import getRecipe from './GetRecipe';

function DisplayCuisine() {



    return(
    <div className="categoryPicturesContainer">
        <div className="categoryPicture">
        <Link to="https://api.edamam.com/api/recipes/v2?type=public&q=american&app_id=5469f054&app_key=79d6e8b780f2ca65225e9566f8ac5b28">
            <h3>American</h3>
            <img src={american} alt="american food"> </img>
            </Link>
        </div>
        <div className="categoryPicture">
            <h3>Indian</h3>
            <img src={indian}></img>
        </div>
        <div className="categoryPicture">
            <h3>Mexican</h3>
            <img src={mexican}></img>
        </div>
        <div className="categoryPicture">
            <h3>Italian</h3>
            <img src={italian}></img>
        </div>
        <div className="categoryPicture">
            <h3>Asian</h3>
            <img src={asian}></img>
        </div>
    </div>
    )
}

export default DisplayCuisine;