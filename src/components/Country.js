import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
const StyledArticle = styled.article`
    width: 300px;
    height: 325px;
    box-sizing: border-box;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0 0 2.5px 0 rgba(168,168,168,1);
    background-color: ${props=>props.bg};
    color: ${props=>props.text};
    overflow: hidden;
    :hover {
        cursor: pointer;
    }
    > figure {
        width: 300px;
        height: 175px;
    }
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
const Country = ({item, theme}) => {
    const {element, text} = theme;
    const {name, flag, region, capital, population} = item;
    const dispatch = useDispatch();
    return (
        <StyledArticle bg={element} text={text} onClick={()=>{
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
