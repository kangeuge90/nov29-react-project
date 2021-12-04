import './DisplayContainer.css'
import nut from './assets/peanut-allergy.jpg';
import gluten from './assets/gluten-free.jpg';
import fish from './assets/seafood-allergy.png';
import dairy from './assets/dairy-free.png'; 

function DisplayAllergies() {
    return(
    <div className="categoryPicturesContainer">
        <div className="categoryPicture">
            <h3>Nut Allergies</h3>
            <img src={nut} alt="american food"/>
        </div>
        <div className="categoryPicture">
            <h3>Gluten Free</h3>
            <img src={gluten}></img>
        </div>
        <div className="categoryPicture">
            <h3>Seafood Allergy</h3>
            <img src={fish}></img>
        </div>
        <div className="categoryPicture">
            <h3>Dairy Allergy</h3>
            <img src={dairy}></img>
        </div>
    </div>
    )
}

export default DisplayAllergies;