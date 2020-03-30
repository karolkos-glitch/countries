import {countries, countriesByRegion, countryName} from '../apis';

export const fetchDataAll = () => async (dispatch) => {
    const payload= await countries();
    dispatch({type: 'FETCH_ALL_COUNTRIES', payload});
}

export const fetchDataByName = (name) => async (dispatch) => {
    const payload = await countryName(name);
    dispatch({type: 'FETCH_COUNTRY_BY_NAME', payload});
}

export const fetchDataByRegion = (name) => async (dispatch) => {
    const payload = await countriesByRegion(name);
    dispatch({type: 'FETCH_COUNTRIES_BY_REGION', payload})
}