const countriesReducer = (state=null, {type, payload}) => {
    const {isArray} = Array;
    switch(type){
        case 'FETCH_COUNTRIES_BY_REGION':
            payload=(isArray(payload))?payload:null;
            return payload;
        case 'FETCH_ALL_COUNTRIES':
            return payload;
        case 'FETCH_COUNTRY_BY_NAME':
            payload=(isArray(payload))?payload:null;
            return payload;
        default:
            return state;
    }
}
export default countriesReducer;