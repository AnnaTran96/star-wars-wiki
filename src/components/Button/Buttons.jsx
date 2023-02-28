import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFavourite, removeFavourite } from "../../store/features/favouritesSlice";
import { getPlanets } from "../../store/features/planetsSlice";
import { getStarships } from "../../store/features/starshipsSlice";


const Buttons = ({ person, openModal, setShowPlanetModal, setShowStarshipModal, titles }) => {
    const dispatch = useDispatch();
    const [showFavourite, setShowFavourite] = useState(true);
    const favouriteButton = {
        favourite: "Favourite",
        removeFavourite: "Remove Favourite"
    }

    const clickedOnPlanetModal = () => {
        dispatch(getPlanets({ planet: person.homeworld }));
        setShowPlanetModal(true);
        setShowStarshipModal(false);
        openModal();
    }

    const clickedOnStarshipModal = () => {
        person.starships.forEach((single) => {
            dispatch(getStarships({ starship: single }));
        });
        setShowStarshipModal(true);
        setShowPlanetModal(false);
        openModal();
    }

    const handleFavourite = () => {
        if (showFavourite) {
            dispatch(addFavourite(person));
            setShowFavourite(false);
        } else {
            dispatch(removeFavourite(person));
            setShowFavourite(true);
        }
    };

    return (
        <div className="buttons">
            <button className="modalBtn" onClick={clickedOnPlanetModal}>
                {titles.planets}
            </button>
            {person.starships && person.starships.length ?
                <button className="modalBtn" onClick={clickedOnStarshipModal}>{titles.starships}</button>
                :
                null
            }
            <button className="modalBtn" onClick={() => handleFavourite(person)}>
                {showFavourite ? favouriteButton.favourite : favouriteButton.removeFavourite}
            </button>
        </div>
    );
};

export default Buttons;