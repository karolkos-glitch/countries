import countries from '../apis';
export const fetchData = () => async (dispatch) => {
    const result = await countries();
    dispatch({type: 'FETCH_ALL_COUNTRIES', payload: result})
}