import React from 'react'
import {useForm} from 'react-hook-form';
import styled from 'styled-components';
import {  connect } from 'react-redux';
import { fetchDataByName, fetchDataByRegion } from '../actions';

const StyledForm = styled.form`
    width: 100%;
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
    ul {
        :hover  li {
            opacity: 1;
        }
        list-style-type: none;
        > li {
            position: relative;
        }
        li {
            border-bottom: 1px solid white;
            box-shadow: 0 0 2.5px 0 rgba(168,168,168,1); 
            background-color: ${props=>props.bg};
            width: 175px;
            height: 35px;
            padding: 5px 20px;
            :hover {
                cursor: pointer;
                background-color: #FF0000;
                }
            ul {
                position: absolute;
                left: 0;
                top: 35px;
            }
            ul > li {
                opacity: .0;
                transition: all 0.25s;
            }
            }
        }
    }
`;
const Search = ({theme, fetchDataByName, fetchDataByRegion}) => {
    const {handleSubmit, register} = useForm();
    const onSubmit = values => {
        const {countryName}=values;
        if(countryName)fetchDataByName(countryName);
    }
    const { element, text } = theme;
    const regions = ["Africa","Europe","Americas","Asia","Oceania"];
    const renderedList = regions.map(item=><li onClick={()=>fetchDataByRegion(item)} key={item}>{item}</li>)
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

export default connect(null,{fetchDataByName, fetchDataByRegion})(Search)
