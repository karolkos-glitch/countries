import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
const StyledArticle = styled.article`
    width: 300px;
    height: 325px;
    box-sizing: border-box;
    margin: 20px;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    > figure > img {
        width: 300px;
        height: 175px;
    }
    > section {
        padding: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        height: 150px;
        > h2 {
            width: 100%;
            text-align: left;
        }
        > p {
            align-self: flex-end;
        }
    }
`;
const Country = ({item}) => {
    const {name, flag, region, capital, population} = item;
    const dispatch = useDispatch();
    return (
        <StyledArticle onClick={()=>{
            dispatch({type: 'SELECT_COUNTRY', payload: item});
        }}>
            <figure>
                <img alt={`${name}'s flag`} src={flag} />
            </figure>
            <section>
                <h2>{name}</h2>
                <p>
                    <strong>Population: </strong>{population}<br/>
                    <strong>Region: </strong>{region}<br/>
                    <strong>Capital: </strong>{capital}
                </p>
            </section>
        </StyledArticle>
    )
}

export default Country
