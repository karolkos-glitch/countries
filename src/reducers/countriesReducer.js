const countriesReducer = (state=null, {type, payload}) => {
    switch(type){
        case 'FETCH_ALL_COUNTRIES':
            return payload;
        case 'FETCH_COUNTRY_BY_NAME':
            const {isArray} = Array;
            payload=(isArray(payload))?payload:null;
            return payload;
        default:
            return state;
    }
}
export default countriesReducer;