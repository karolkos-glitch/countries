import React, {lazy, Suspense, Fragment} from 'react'
import {connect, useSelector} from 'react-redux';
import Header from './Header';
import styled, {createGlobalStyle}from 'styled-components';
import { lightTheme, fonts } from '../styled';
import { fetchData } from '../actions';
const Details = lazy(()=>import("./Details"));
const Home = lazy(()=>import("./Home"));
const {background} = lightTheme;
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
    height: 100vh;
    background: ${background};
`;
const StyledMain = styled.main`

`;
const App = () => {
    const isSelected = useSelector(state=>state.selectedCountry);
    const main = (!isSelected)? <Home /> : <Details/> ;
    return (
        <Fragment>
        <Global />
        <StyledBody>
            <Header />
            <Suspense fallback={()=>(<div>Loading...</div>)}>
                {main}
            </Suspense>
        </StyledBody>
        </Fragment>
    )
}

export default connect(null,{fetchData})(App)
