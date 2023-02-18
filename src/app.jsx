import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {GlobalContext} from './context';

const App = ({children}) => {
    const SearchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const RandomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

    const [Meals, setMeals] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [isShowModal, setIsShowModal] = useState(false);
    const [selectedMeal, SetSelectedMeal] = useState(null);

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

    const selectMeal = (MealID) =>{
        const sMeal = Meals.filter(Meal => MealID == Meal.idMeal);
        SetSelectedMeal(sMeal);
        setIsShowModal(true);
    }

    const closeModal = () => {
        SetSelectedMeal(null);
        setIsShowModal(false);
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
        <GlobalContext.Provider value={{Meals, isLoading, setSearchTerm, fetchRandomMeal, isShowModal, selectedMeal, selectMeal, closeModal}}>
            {children}
        </GlobalContext.Provider>
    );
}

export default App;
