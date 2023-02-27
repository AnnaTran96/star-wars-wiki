import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../../pages/Error/Error";
import { getSearchPeopleResults, getSearchPlanetResults, getSearchStarshipsResults } from "../../store/features/searchSlice";

import './Search.css';

const Search = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate('favourites');
    const ref = useRef();

    const [searchWord, setSearchWord] = useState('');
    const { hasError } = useSelector((state) => state.searchResults)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchWord.length) {
            dispatch(getSearchPeopleResults({ search: searchWord }));
            dispatch(getSearchPlanetResults({ search: searchWord }));
            dispatch(getSearchStarshipsResults({ search: searchWord }));
            navigate('/results');
            setSearchWord('');
        }
    };

    const handleOnChange = (e) => {
        setSearchWord(e.target.value);
    };

    return (
        <>
            <div className='search-container'>
                <form ref={ref}>
                    <input value={searchWord} onChange={handleOnChange} placeholder="Search" required />
                    <button type="submit" onClick={handleSubmit} className="primary-button">Search</button>
                </form>
            </div>
            {hasError && <Error />}
        </>
    );
};

export default Search;
