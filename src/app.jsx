import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {GlobalContext} from './context'

const App = ({children}) => {
    const SearchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

    const [Meals, setMeals] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    async function fetchData(endPoint){
        setIsLoading(true);
        const data = await axios(endPoint);
        console.log('fetching from ' + endPoint);
        setMeals(data.data.meals)
        setIsLoading(false)
        return data;
    }

    useEffect(() => {
        console.log('fetching alll the data');
        fetchData(SearchUrl+'c');
    },[]);

    useEffect(()=>{
        fetchData(SearchUrl+searchQuery);
    }, [searchQuery])

    return (
        <GlobalContext.Provider value={{Meals, isLoading, setSearchQuery}}>
            {children}
        </GlobalContext.Provider>
    );
}

export default App;
