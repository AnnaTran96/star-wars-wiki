import { configureStore } from "@reduxjs/toolkit";
import FavouriteReducer from "./features/favouritesSlice";
import PeopleReducer from "./features/peopleSlice";
import PlanetsReducer from "./features/planetsSlice";
import SearchResultsReducer from "./features/searchSlice";
import StarshipsReducer from "./features/starshipsSlice";


export default configureStore({
    reducer: {
        people: PeopleReducer,
        planets: PlanetsReducer,
        starships: StarshipsReducer,
        searchResults: SearchResultsReducer,
        favourites: FavouriteReducer
    }
});