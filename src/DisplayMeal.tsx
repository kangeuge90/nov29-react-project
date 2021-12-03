import './DisplayContainer.css'

function DisplayMeal() {
    return(
    <div className="categoryPicturesContainer">
        <div className="categoryPicture">
            <h3>Breakfast</h3>
            {/* <img src={american} alt="american food"/> */}
        </div>
        <div className="categoryPicture">
            <h3>Brunch</h3>
            {/* <img src="./indianFood.jpg"></img> */}
        </div>
        <div className="categoryPicture">
            <h3>Lunch</h3>
            {/* <img src="./.jpeg"></img> */}
        </div>
        <div className="categoryPicture">
            <h3>Dinner</h3>
            {/* <img src="./.jpeg"></img> */}
        </div>
        <div className="categoryPicture">
            <h3>Dessert</h3>
            {/* <img src="./.jpeg"></img> */}
        </div>
    </div>
    )
}

export default DisplayMeal;