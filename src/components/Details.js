import React from 'react'
import { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Details = () => {
    const country = useSelector(state=> state.selectedCountry);
    const{name, region, population, subregion, capital, nativeName} = country;
    const dispatch = useDispatch();
    return (
        <article>
            <button onClick={()=>dispatch({type:"RESET"})}>GO BACK</button>
            <h2>{name}</h2>
            <article>
                <strong>Native Name: </strong>{nativeName}<br />
                <strong>Population: </strong>{population}<br/>
                <strong>Region: </strong>{region}<br/>
                <strong>Sub Region:</strong>{subregion}<br/>
                <strong>Capital: </strong>{capital}<br />
            </article>
        </article>
    )
}

export default Details
