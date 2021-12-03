import './DisplayContainer.css'

function DisplayAllergies() {
    return(
    <div className="categoryPicturesContainer">
        <div className="categoryPicture">
            <h3>Nut Allergies</h3>
            {/* <img src={american} alt="american food"/> */}
        </div>
        <div className="categoryPicture">
            <h3>Gluten Free</h3>
            {/* <img src="./indianFood.jpg"></img> */}
        </div>
        <div className="categoryPicture">
            <h3>Alcohol Allergy</h3>
            {/* <img src="./.jpeg"></img> */}
        </div>
    </div>
    )
}

export default DisplayAllergies;