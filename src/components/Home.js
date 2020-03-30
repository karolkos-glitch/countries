import React, {Fragment} from 'react'
import { fetchData } from '../actions';
import { connect, useSelector } from 'react-redux';
import Search from './Search';
import Country from './Country';
const Home = ({fetchData, theme}) => {
    console.log(theme.name);
    const countries=useSelector(state=>state.countries);
    (countries)?console.log('hello'):fetchData();
    const renderedList = (countries)?countries.map(item => <Country key={item.numericCode} item={item} theme={theme}/>):<div>Loading...</div>;
    return (
        <Fragment>
            <Search theme={theme}/>
            {renderedList}
        </Fragment>
    )
}
export default connect(null,{fetchData})(Home)
