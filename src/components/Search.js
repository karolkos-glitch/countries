import React, { Fragment } from 'react'
import styled from 'styled-components';

const StyledForm = styled.form`
    width: 80%;
    padding: 50px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props=>props.text};
    > input {
        width: 450px;
        height: 35px;
        border-radius: 15px;
        padding: 0 20px;
        background-color: ${props=>props.bg}
    }
    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > ul {
            :hover > li {
                display: block;
            }
            list-style-type: none;
            > li {
                border-bottom: 1px solid white;
                margin: 0 0 0 20px;
                display: none;
                background-color: grey;
                height: 35px;
                padding: 5px 20px;
                :first-child{
                    display: block;
                }
                :hover {
                    cursor: pointer;
                    background-color: #FFFF00;
                }
                :first-child{
                    display: block;
                }
            }
        }
    }
`;
const Search = ({theme}) => {
    const {input, text } = theme;
    const regions = ["Africa", "Europe","Americas","Asia","Australia"];
    const renderedList = regions.map(item=><li>{item}</li>)
    return (
        <StyledForm text={text} bg={input}>
            <input  name="countryName" type="text" placeholder="Look for a country" />
            <div>
                <label>Filter by region: </label>
                <ul>
                    {renderedList}
                </ul>
            </div>
        </StyledForm>
    )
}

export default Search
