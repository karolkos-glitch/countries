import countriesReducer from './countriesReducer';
import selectedCountryReducer from './selectedCountryReducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    countries: countriesReducer,
    selectedCountry: selectedCountryReducer
});

export default rootReducer;