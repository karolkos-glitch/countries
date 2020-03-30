import {countries} from '../apis';
import {countryName} from '../apis';
export const fetchDataAll = () => async (dispatch) => {
    const result = await countries();
    dispatch({type: 'FETCH_ALL_COUNTRIES', payload: result});
}

export const fetchDataByName = (name) => async (dispatch) => {
    const result = await countryName(name);
    console.log(name);
    dispatch({type: 'FETCH_COUNTRY_BY_NAME', payload: result});
}