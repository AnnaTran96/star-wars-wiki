import Card from "../../components/Card/Card";

const Favourite = () => {

    // Since I am loading favourites from local storage, I will not be using the selector to get state.favourites

    const savedFavourites = JSON.parse(localStorage.getItem("favourites"));

    return (
        <div className='favourites-container'>
            <h1 className="header-title" >Favourites</h1>
            <div className="cards-container">
                {savedFavourites.favourites.map((person, id) => (
                    <Card
                        person={person}
                        key={id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Favourite;
