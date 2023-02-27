import { useSelector } from "react-redux";
import ResultsCard from "../../components/Cards/ResultsCard/ResultsCard";
import Loading from "../../components/Loading/Loading";
import Error from '../Error/Error';

const Results = () => {

    const { results, loading, hasError, isPeople, isPlanets, isStarships } = useSelector((state) => state.searchResults);

    if (loading) {
        return <Loading />
    }

    return (
        <div className='results-container'>
            <h1 className="header-title" >Results</h1>
            <div className="cards-container">
                {results.map((item, id) => (
                    <ResultsCard
                        results={item}
                        isPeople={isPeople}
                        isPlanets={isPlanets}
                        isStarships={isStarships}
                        key={id}
                    >
                    </ResultsCard>
                ))}
            </div>
            {hasError && <Error />}
        </div>
    );
};

export default Results;
