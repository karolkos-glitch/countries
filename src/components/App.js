import React, {lazy, Suspense, Fragment} from 'react'
import {connect, useSelector} from 'react-redux';
import Header from './Header';
import styled, {createGlobalStyle}from 'styled-components';
import { fonts } from '../styled';
import { fetchData } from '../actions';
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
    background: ${ props => props.bg };
    padding: 0 100px;
`;
const StyledMain = styled.main`

`;
const App = () => {
    const isSelected = useSelector(state=>state.selectedCountry);
    const theme = useSelector(state => state.theme);
    const main = (!isSelected)? <Home theme={theme} /> : <Details theme={theme}/>;
    return (
        <Fragment>
        <Global />
        <StyledBody bg={theme.background}>
            <Header theme={theme}/>
            <Suspense fallback={()=>(<div>Loading...</div>)}>
                {main}
            </Suspense>
        </StyledBody>
        </Fragment>
    )
}

export default connect(null,{fetchData})(App)
