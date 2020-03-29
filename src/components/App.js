import React, {lazy, Suspense} from 'react'
import Header from './Header';
import styled from 'styled-components';
import { lightTheme } from '../styled';
import fetchData from '../apis';
const Details = lazy(()=>import("./Details"));
const Home = lazy(()=>import("./Home"));

const {background} = lightTheme;
const StyledBody = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
    background: ${background};
`;

const App = () => {
    fetchData();
    const isSelected = true;
    const main = (isSelected)? <Home /> : <Details/> ;
    return (
        <StyledBody>
            <Header />
            <Suspense fallback={()=>(<div>Loading...</div>)}>
                {main}
            </Suspense>
        </StyledBody>
    )
}

export default App
