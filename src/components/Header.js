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
    border: 1px solid ${props => props.border};
   > h1, > p {
       font-size: ${homeSize};
       font-weight: ${bold};
   }
`;
const Header = ({theme}) => {
    const {element, text, name} = theme;
    const borderColor = (name==="light")?"black":"white";
    const dispatch = useDispatch();
    return (
        <StyledHeader bg={element} text={text} border={borderColor}>
            <h1>Where in the world</h1>
            <p onClick={()=>dispatch({type: "SWITCH_MODE"})}><span></span>Dark Mode</p>
        </StyledHeader>
    )
}

export default Header
