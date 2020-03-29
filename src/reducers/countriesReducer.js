const countriesReducer = (state=null, {type, payload}) => {
    switch(type){
        case 'FETCH_ALL_COUNTRIES':
            return payload;
        default:
            return state;
    }
}
export default countriesReducer;