import './DisplayContainer.css'
import keto from './assets/keto.jpg';
import pescatarian from './assets/pescatarian.jpg';
import vegan from './assets/vegan.jpg';
import vegatarian from './assets/vegatarian.jpg';
import kosher from './assets/kosher.png';

function DisplayDiet() {
    return(
    <div className="categoryPicturesContainer">
        <div className="categoryPicture">
            <h3>Keto</h3>
            <img src={keto} alt="american food"/>
        </div>
        <div className="categoryPicture">
            <h3>Pescatarian</h3>
            <img src={pescatarian}></img>
        </div>
        <div className="categoryPicture">
            <h3>Vegan</h3>
            <img src={vegan}></img>
        </div>
        <div className="categoryPicture">
            <h3>Vegatarian</h3>
            <img src={vegatarian}></img>
        </div>
        <div className="categoryPicture">
            <h3>Kosher</h3>
            <img src={kosher}></img>
        </div>
    </div>
    )
}

export default DisplayDiet;