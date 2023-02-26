import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearchResults } from "../../store/features/searchSlice";

import './Search.css';

const Search = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate('favourites');
    const ref = useRef();

    const [searchWord, setSearchWord] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchWord.length) {
            dispatch(getSearchResults({ search: searchWord }));
            navigate('/results');
            setSearchWord('');
        }
    };

    const handleOnChange = (e) => {
        setSearchWord(e.target.value);
    };

    return (
        <div className='search-container'>
            <form ref={ref}>
                <input value={searchWord} onChange={handleOnChange} placeholder="Search" required />
                <button type="submit" onClick={handleSubmit} className="primaryBtn">Search</button>
            </form>
        </div>
    );
};

export default Search;
