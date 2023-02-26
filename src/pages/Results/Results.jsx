import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import Error from '../Error/Error';

const Results = () => {

    const { results, loading, hasError } = useSelector((state) => state.searchResults);

    if (loading) {
        return <Loading />
    }

    return (
        <div className='results-container'>
            <h1 className="header-title" >Results</h1>
            <div className="cards-container">
                {results.map((person, id) => (
                    <Card
                        person={person}
                        key={id}
                    />
                ))}
            </div>
            {hasError && <Error />}
        </div>
    );
};

export default Results;
