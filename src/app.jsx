import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {GlobalContext} from './context';

const App = ({children}) => {
    const SearchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const RandomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

    const [Meals, setMeals] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    // const [FavMeals, setFavMeals] = useState();

    async function fetchMeals(endPoint){
        setIsLoading(true);
        const data = await axios(endPoint);
        setMeals(data.data.meals);
        setIsLoading(false);
        return data;
    }

    async function fetchRandomMeal(){
        fetchMeals(RandomMealUrl);
    }

    async function getMealByID(id){
        const meal = await axios("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id);
        return meal.data.meals.at(0);
    }

    // starting fucntion
    useEffect(() => {
        setIsLoading(true);
        fetchMeals(SearchUrl);
    },[]);

    useEffect(()=>{
        if(!searchTerm) return;
        fetchMeals(SearchUrl+searchTerm);
    }, [searchTerm]);

    return (
        <GlobalContext.Provider value={{Meals, isLoading, setSearchTerm, fetchRandomMeal}}>
            {children}
        </GlobalContext.Provider>
    );
}

export default App;
