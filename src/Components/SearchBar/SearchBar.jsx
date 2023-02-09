import React, {useContext, useState} from 'react';

import { GlobalContext } from '../../context';

import './SearchBar.css'

const SearchComp = () => {


    Math.random()
    const [SearchValue, setSearchValue] = useState('')
    
    const {setSearchQuery} = useContext(GlobalContext);

    return (
        <header>
            <form action='post'>
                <input type="text" onChange={(e) => {
                    e.preventDefault();
                    setSearchValue(e.target.value);
                }} name="SearchBar" id="SearchBar" placeholder='Type Your Favorite Meal' />
                <input type="submit" onClick={(e)=>{
                    e.preventDefault();
                    setSearchQuery(SearchValue);
                }} value="Search" className='btn main-btn' />
                <input type="button" value="Feel Lucky" className='btn secondary-btn'/>
            </form>
        </header>
    );
}

export default SearchComp;
