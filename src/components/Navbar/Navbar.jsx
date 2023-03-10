import { useNavigate } from 'react-router-dom';
import Search from '../Search/Search';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const redirectToHome = () => navigate('/');
    const redirectToFavourites = () => navigate('/favourites');

    return (
        <div className='navbar'>
            <div className='navbar-links'>
                <button className='primary-button' onClick={redirectToHome}>
                    Home
                </button>
                <button className='primary-button' onClick={redirectToFavourites}>
                    Favourites
                </button>
            </div>
            <div className='navbar-searchbar'>
                <Search />
            </div>
        </div>
    );
};

export default Navbar;
