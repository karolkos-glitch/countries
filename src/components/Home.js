import React, {Fragment} from 'react'
import { fetchDataAll } from '../actions';
import { connect, useSelector } from 'react-redux';
import Search from './Search';
import Country from './Country';
const Home = ({fetchDataAll,theme}) => {
    const countries=useSelector(state=>state.countries);
    (countries)?console.log('hello'):fetchDataAll();
    const renderedList = (countries)?countries.map(item => <Country key={item.numericCode} item={item} theme={theme}/>):<div>Loading...</div>;
    return (
        <Fragment>
            <Search theme={theme}/>
            {renderedList}
        </Fragment>
    )
}
export default connect(null,{fetchDataAll})(Home)
