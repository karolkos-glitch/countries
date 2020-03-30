import React, {lazy, Suspense,Fragment} from 'react'
import {useSelector} from 'react-redux';
import Header from './Header';
import styled, {createGlobalStyle}from 'styled-components';
import { fonts } from '../styled';
const Details = lazy(()=>import("./Details"));
const Home = lazy(()=>import("./Home"));
const {fontFamily} = fonts;


const Global = createGlobalStyle`
    * {
        font-family: ${fontFamily};
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;
const StyledBody = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100vw;
    min-height: 100vh;
    background: ${ props => props.bg };
    padding: 0 100px;
    > div {
        color: ${props=>props.text};
        width: 100vw;
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center
    }
`;
const App = () => {
    const isSelected = useSelector(state=>state.selectedCountry);
    const theme = useSelector(state => state.theme);
    const {text, background} = theme;
    const main = (!isSelected)? <Home theme={theme} /> : <Details theme={theme}/>;
    return (
        <Fragment>
        <Global />
        <StyledBody text={text} bg={background}>
            <Header theme={theme}/>
            <Suspense fallback={()=>(<div>Loading...</div>)}>
                {main}
            </Suspense>
        </StyledBody>
        </Fragment>
    )
}

export default App;
