
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";

import Buttons from "../../Button/Buttons";

import Modal from "../../Modal/Modal";
import "../Card.css";

const CharacterCard = ({ person }) => {
    const [showPlanetModal, setShowPlanetModal] = useState(false);
    const [showStarshipModal, setShowStarshipModal] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { planets } = useSelector((state) => state.planets);
    const { starships } = useSelector((state) => state.starships);

    const titles = {
        planets: "Planets",
        starships: "Starships"
    }

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    }

    return (
        <div className='card-container'>
            <h1 >{person.name}</h1>
            <p>Gender: {person.gender}</p>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Birth Year: {person.birth_year}</p>

            <Buttons
                person={person}
                openModal={openModal}
                setShowPlanetModal={setShowPlanetModal}
                setShowStarshipModal={setShowStarshipModal}
                titles={titles}
            />

            {(isModalOpen && showPlanetModal) &&
                <Modal setIsModalOpen={setIsModalOpen} title={titles.planets}>
                    <div className="planets-container">
                        <p>Name: {planets.name}</p>
                        <p>Population: {planets.population}</p>
                        <p>Gravity: {planets.gravity}</p>
                        <p>Rotation Period: {planets.rotation_period}</p>
                        <p>Orbital Period: {planets.orbital_period}</p>
                        <p>Diameter: {planets.diameter}</p>
                    </div>
                </Modal>
            }

            {(isModalOpen && showStarshipModal) &&
                <Modal setIsModalOpen={setIsModalOpen} title={titles.starshipsTitle}>
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
                </Modal>
            }
        </div>
    );
};

export default CharacterCard;
