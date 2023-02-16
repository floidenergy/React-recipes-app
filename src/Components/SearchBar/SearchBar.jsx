import React, {useContext, useState} from 'react';

import { GlobalContext } from '../../context';

import './SearchBar.css'

const SearchComp = () => {

    const [Text, setText] = useState('')
    const {setSearchTerm, fetchRandomMeal} = useContext(GlobalContext);

    return (
        <header>
            <form onSubmit={(e) => {
                e.preventDefault();
                if(Text){
                    setSearchTerm(Text);
                    setText("")
                }
            }}>
                <input type="text" onChange={(e) => {
                    e.preventDefault();
                    setText(e.target.value);
                }}  name="SearchBar" id="SearchBar" placeholder='Type Your Favorite Meal' />
                <input type="submit" value="Search" className='btn main-btn' />
                <input type="button" onClick={()=>{
                    setSearchTerm("");
                    fetchRandomMeal();
                }} value="Feel Lucky" className='btn secondary-btn'/>
            </form>
        </header>
    );
}

export default SearchComp;
