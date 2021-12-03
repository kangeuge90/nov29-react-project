import './DisplayContainer.css'

function DisplayCuisine() {
    return(
    <div className="categoryPicturesContainer">
        <div className="categoryPicture">
            <h3>American</h3>
            {/* <img src={american} alt="american food"/> */}
        </div>
        <div className="categoryPicture">
            <h3>Indian</h3>
            {/* <img src="./indianFood.jpg"></img> */}
        </div>
        <div className="categoryPicture">
            <h3>Mexican</h3>
            {/* <img src="./.jpeg"></img> */}
        </div>
    </div>
    )
}

export default DisplayCuisine;