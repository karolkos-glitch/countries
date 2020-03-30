import countriesReducer from './countriesReducer';
import selectedCountryReducer from './selectedCountryReducer';
import themeReducer from './themeReducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    countries: countriesReducer,
    selectedCountry: selectedCountryReducer,
    theme: themeReducer
});

export default rootReducer;