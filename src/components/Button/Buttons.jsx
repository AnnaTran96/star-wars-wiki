import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFavourite, removeFavourite } from "../../store/features/favouritesSlice";
import { getPlanets } from "../../store/features/planetsSlice";
import { getStarships } from "../../store/features/starshipsSlice";


const Buttons = ({ person, openModal, setShowPlanetModal, setShowStarshipModal, titles }) => {
    const dispatch = useDispatch();
    const [showFavourite, setShowFavourite] = useState(true);

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

    const handleFavourite = (person) => {
        dispatch(addFavourite(person));
        setShowFavourite(false);
    };

    const handleRemoveFavourite = (person) => {
        dispatch(removeFavourite(person));
        setShowFavourite(true);
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
            {showFavourite ?
                <button className="modalBtn" onClick={() => handleFavourite(person)}>
                    Favourite
                </button> :
                <button className="modalBtn" onClick={() => handleRemoveFavourite(person)}>
                    Remove Favourite
                </button>
            }
        </div>
    );
};

export default Buttons;