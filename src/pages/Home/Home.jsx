import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import { getPeople } from "../../store/features/peopleSlice";
import Error from '../Error/Error';

const Home = () => {
    const dispatch = useDispatch();
    const { people, loading, hasError } = useSelector((state) => state.people);

    useEffect(() => {
        dispatch(getPeople());
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <div className='home-container'>
            <h1 className="header-title">WikiWars</h1>
            <div className="cards-container">
                {people.map((person, id) => (
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

export default Home;
