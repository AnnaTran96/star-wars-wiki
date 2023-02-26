
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addFavourite, removeFavourite } from "../../store/features/favouritesSlice";
import { getPlanets } from "../../store/features/planetsSlice";
import { getStarships } from "../../store/features/starshipsSlice";

import Modal from "../Modal/Modal";
import "./Card.css";

const Card = ({ person }) => {
    const dispatch = useDispatch();

    const [showPlanetModal, setShowPlanetModal] = useState(false);
    const [showStarshipModal, setShowStarshipModal] = useState(false);
    const [showFavourite, setShowFavourite] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const titles = {
        planetsTitle: "Planets",
        starshipsTitle: "Starships"
    }

    const { planets } = useSelector((state) => state.planets);
    const { starships } = useSelector((state) => state.starships);

    const openModal = () => {
        setIsModalOpen(true);
        if (document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden";
        }
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

    const handleFavourite = (person) => {
        dispatch(addFavourite(person));
        setShowFavourite(false);
    };

    const handleRemoveFavourite = (person) => {
        dispatch(removeFavourite(person));
        setShowFavourite(true);
    };

    return (
        <div className='card-container'>
            <h1 >{person.name}</h1>
            <p>Gender: {person.gender}</p>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Birth Year: {person.birth_year}</p>
            <div className="buttons">
                <button className="modalBtn" onClick={clickedOnPlanetModal}>
                    Planets
                </button>
                {person.starships.length ?
                    <button className="modalBtn" onClick={clickedOnStarshipModal}>Starships</button>
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

            {isModalOpen && showPlanetModal && <Modal setIsModalOpen={setIsModalOpen} title={titles.planetsTitle}>
                <div className="planets-container">
                    <p>Name: {planets.name}</p>
                    <p>Population: {planets.population}</p>
                    <p>Gravity: {planets.gravity}</p>
                    <p>Rotation Period: {planets.rotation_period}</p>
                    <p>Orbital Period: {planets.orbital_period}</p>
                    <p>Orbital Period: {planets.orbital_period}</p>
                    <p>Diameter: {planets.diameter}</p>
                </div>
            </Modal>}

            {isModalOpen && showStarshipModal && <Modal setIsModalOpen={setIsModalOpen} title={titles.starshipsTitle}>
                {starships.map((starship, index) => (
                    <Fragment key={index}>
                        <div className="starships-container">
                            <div className="starship-row">
                                <p>Name: {starship.name}</p>
                                <p>Model: {starship.model}</p>
                                <p>Manufacturer: {starship.manufacturer}</p>
                                <p>Costs: {starship.cost_in_credits}</p>
                                <p>Length: {starship.length}</p>
                                <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
                                <p>Consumables: {starship.consumables}</p>
                                <p>Starship Class: {starship.starship_class}</p>
                            </div>
                        </div>
                    </Fragment>
                ))}
            </Modal>}
        </div>
    );
};

export default Card;
