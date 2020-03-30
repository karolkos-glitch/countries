import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Fragment } from 'react';

const StyledButton = styled.button`
    height: 25px;
    background-color: ${props=>props.bg};
    color: ${props => props.text};
    padding: 0 20px;
    margin: 20px 0;
    border-radius: 5px;
    align-self: flex-start;
`
const StyledArticle = styled.article`
    width: 80%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    color: ${props=>props.text};
    > section {
        flex: 1 1;
        > figure > img {
            width: 500px;
            height: 350px;
        }
        > h2 {
            margin: 40px 0;
            padding: 0 0 0 50px;
        }
        > div {
            display: flex;
            flex-flow: column wrap;
            max-height: 200px;
            align-items: space-between;
            > p {
                margin:0 0 0 50px;
                font-weight: 300;
            }
        }
    }
`;
const Details = ({theme}) => {
    const {text, element} = theme;
    const country = useSelector(state=> state.selectedCountry);
    const{name, region, population, subregion, capital, nativeName, flag, topLevelDomain, currencies, languages} = country;
    const dispatch = useDispatch();
    return (
        <Fragment>
        <StyledArticle text={text}>
            <section>
            <StyledButton text={text} bg={element} onClick={()=>dispatch({type:"RESET"})}><p></p>BACK</StyledButton>
            <figure><img alt={`${name}'s flag`} src={flag} /></figure>
            </section>
            <section>
                <h2>{name}</h2>
                <div>
                    <p><strong>Native Name: </strong>{nativeName}</p><br />
                    <p><strong>Population: </strong>{population}</p><br />
                    <p><strong>Region: </strong>{region}</p><br />
                    <p><strong>Sub Region: </strong>{subregion}</p><br />
                    <p><strong>Capital: </strong>{capital}</p><br />
                    <p><strong>Top Level Domain: </strong>{topLevelDomain}</p><br />
                    <p><strong>Currencies: </strong>{currencies}</p><br />
                    <p><strong>Languages: </strong>{languages}</p><br />
                </div>
            </section>
        </StyledArticle>
        </Fragment>
    )
}

export default Details
