const selectedCountryReducer = (state=null, {payload, type}) => {
    switch(type){
        case 'SELECT_COUNTRY':
            const{name, region, population, subregion, capital, nativeName} = payload;
            const newState = {
                name,
                region,
                population,
                subregion,
                capital,
                nativeName
            }
            return newState;
        case 'RESET':
            return null;
        default:
            return state;
    }
}
export default selectedCountryReducer;