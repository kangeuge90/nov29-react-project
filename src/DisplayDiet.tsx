import './DisplayContainer.css'

function DisplayDiet() {
    return(
    <div className="categoryPicturesContainer">
        <div className="categoryPicture">
            <h3>Keto</h3>
            {/* <img src={american} alt="american food"/> */}
        </div>
        <div className="categoryPicture">
            <h3>Pescatarian</h3>
            {/* <img src="./indianFood.jpg"></img> */}
        </div>
        <div className="categoryPicture">
            <h3>Vegan</h3>
            {/* <img src="./.jpeg"></img> */}
        </div>
    </div>
    )
}

export default DisplayDiet;