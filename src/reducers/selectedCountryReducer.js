const selectedCountryReducer = (state=null, {payload, type}) => {
    switch(type){
        case 'SELECT_COUNTRY':
            console.log(payload);
            const{name, region, population, subregion, capital, nativeName, flag, topLevelDomain, currencies, languages} = payload;
            let modLanguages=languages[0].name, modTopLevelDomain=topLevelDomain[0], modCurrencies=currencies[0].name;
            for(let i=1;i<languages.length;i++){
                modLanguages+=`, ${languages[i].name}`;
            }
            for(let i=1;i<topLevelDomain.length;i++){
                modTopLevelDomain+=`, ${topLevelDomain[i]}`;
            }
            for(let i=1;i<currencies.length;i++){
                modCurrencies+=`, ${currencies[i].name}`;
            }
            console.log(`${modLanguages}\n${modCurrencies}\n${modTopLevelDomain}`);
            const newState = {
                name,
                region,
                population,
                subregion,
                capital,
                nativeName,
                flag,
                topLevelDomain: modTopLevelDomain,
                currencies: modCurrencies,
                languages: modLanguages,
            }
            return newState;
        case 'RESET':
            return null;
        default:
            return state;
    }
}
export default selectedCountryReducer;