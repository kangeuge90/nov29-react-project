import './Header.css'
import american from '../public/americanFood.jpg';

function Header() {
    return (
        <div className="headerContainer">
        <form className="searchBarContainer">
            <label>Search:  </label><input></input>
            {/* <p ><img src='./favoriteHeart.png'> </img> Access Your Favorites!</p> */}
        </form>
        <div className="categoriesContainer">
            <h2>Sort by: </h2>
            <ul className="radioButtons">
                <input type="radio"></input> <label >Cuisine Type</label>
                <input type="radio"></input> <label >Meal Type</label>
                <input type="radio"></input> <label >Diet Type</label>
                <input type="radio"></input> <label >Allergies</label>
            </ul>
        </div>
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
                <h3>Etc. food</h3>
                {/* <img src="./popsicle.jpeg"></img> */}
            </div>
        </div>
    </div>
    )
}

export default Header;
