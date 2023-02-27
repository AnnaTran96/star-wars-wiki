import CharacterCard from "../../components/Cards/CharacterCard/CharacterCard";

const Favourite = () => {

    // Since I am loading favourites from local storage, I will not be using the selector to get state.favourites

    const savedFavourites = JSON.parse(localStorage.getItem("favourites"));

    return (
        <div className='favourites-container'>
            <h1 className="header-title" >Favourites</h1>
            <div className="cards-container">
                {savedFavourites && savedFavourites.favourites && savedFavourites.favourites.map((person, id) => (
                    <CharacterCard
                        person={person}
                        key={id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Favourite;
