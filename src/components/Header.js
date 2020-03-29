import React from 'react'
import styled from 'styled-components'
import { lightTheme, darkTheme, fonts } from '../styled';
const { element, text, input } = lightTheme; 
const { bold, regular, light, homeSize} = fonts;
const StyledHeader = styled.header`
    color: ${text};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background: ${element};
    border-bottom: 1px solid black;
   > h1, > p {
       font-size: ${homeSize};
       font-weight: ${bold};
   }
`;
const Header = () => {
    return (
        <StyledHeader>
            <h1>Where in the world</h1>
            <p><span></span>Dark Mode</p>
        </StyledHeader>
    )
}

export default Header
