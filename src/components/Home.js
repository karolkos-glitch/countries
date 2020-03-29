import React, {Fragment} from 'react'
import { fetchData } from '../actions';
import { connect, useSelector } from 'react-redux';
import Country from './Country';
const Home = ({fetchData}) => {
    const countries=useSelector(state=>state.countries);
    (countries)?console.log('hello'):fetchData();
    const renderedList = (countries)?countries.map(item => <Country key={item.numericCode} item={item}/>):<div>Loading...</div>;
    return (
        <Fragment>
            {renderedList}
        </Fragment>
    )
}
export default connect(null,{fetchData})(Home)
