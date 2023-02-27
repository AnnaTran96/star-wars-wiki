import "../Card.css";
import CharacterCard from "../CharacterCard/CharacterCard";

const ResultsCard = ({ results, isPeople, isPlanets, isStarships }) => {
    return (
        <>
            {isPeople &&
                <CharacterCard person={results} />
            }
            {isPlanets &&
                <div className="card-container">
                    <p>Name: {results.name}</p>
                    <p>Population: {results.population}</p>
                    <p>Gravity: {results.gravity}</p>
                    <p>Rotation Period: {results.rotation_period}</p>
                    <p>Orbital Period: {results.orbital_period}</p>
                    <p>Diameter: {results.diameter}</p>
                </div>
            }
            {isStarships &&
                <div className="card-container">
                    <p>Name: {results.name}</p>
                    <p>Model: {results.model}</p>
                    <p>Manufacturer: {results.manufacturer}</p>
                    <p>Costs: {results.cost_in_credits}</p>
                    <p>Length: {results.length}</p>
                    <p>Max Atmosphering Speed: {results.max_atmosphering_speed}</p>
                    <p>Consumables: {results.consumables}</p>
                    <p>Starship Class: {results.starship_class}</p>
                </div>
            }
        </>
    );
};

export default ResultsCard;
