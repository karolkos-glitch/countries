import React from 'react'
import {useForm} from 'react-hook-form';
import styled from 'styled-components';
import { useDispatch, connect } from 'react-redux';
import { fetchDataByName } from '../actions';

const StyledForm = styled.form`
    width: 80%;
    height: 200px;
    position: relative;
    padding: 50px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props=>props.text};
    > input {
        color: ${props=>props.text};
        width: 450px;
        height: 35px;
        border-radius: 15px;
        padding: 0 20px;
        background-color: ${props=>props.bg};
        border: none;
        box-shadow: 0 0 2.5px 0 rgba(168,168,168,1); 
    }
    > ul {
        :hover > li {
            display: block;
        }
        list-style-type: none;
        > li {
            position: absolute;
            border-bottom: 1px solid white;
            display: none;
            box-shadow: 0 0 2.5px 0 rgba(168,168,168,1); 
            background-color: ${props=>props.bg};
            height: 35px;
            padding: 5px 20px;
            :first-child{
                display: block;
            }
            :hover {
                cursor: pointer;
                background-color: #FFFF00;
                }
            }
        }
    }
`;
const Search = ({theme, fetchDataByName}) => {
    const {handleSubmit, register} = useForm();
    const onSubmit = values => {
        const {countryName}=values;
        fetchDataByName(countryName);
    }
    const {element, text } = theme;
    const regions = ["Africa", "Europe","Americas","Asia","Australia"];
    const renderedList = regions.map(item=><li>{item}</li>)
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)} text={text} bg={element}>
            <input ref={register()} name="countryName" type="text" placeholder="Look for a country" />
            <ul>
                <li>Filtered by region
                    <ul>
                        {renderedList}
                    </ul>
                </li>
            </ul>
        </StyledForm>
    )
}

export default connect(null,{fetchDataByName})(Search)
