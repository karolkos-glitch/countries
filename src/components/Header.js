import React from 'react'
import styled from 'styled-components'
import { fonts } from '../styled';
import { useDispatch, useSelector } from 'react-redux';

const { bold, regular, light, homeSize} = fonts;
const StyledHeader = styled.header`
    color: ${props => props.text};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    width: 100%;
    height: 50px;
    background: ${props=> props.bg};
    box-shadow: 0 0 2.5px 0 rgba(168,168,168,1);
   > h1, > p {
       font-size: ${homeSize};
       font-weight: ${bold};
   }
   > p:hover {
       cursor: pointer;
       }
`;
const Header = ({theme}) => {
    const {element, text, name} = theme;
    const nameOfMode = (name==="light")? "Dark": "Light";
    const dispatch = useDispatch();
    return (
        <StyledHeader bg={element} text={text}>
            <h1>Where in the world</h1>
    <p onClick={()=>dispatch({type: "SWITCH_MODE"})}><span></span>{nameOfMode} mode</p>
        </StyledHeader>
    )
}

export default Header
