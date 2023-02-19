import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './style.css'

import { GlobalContext } from './context'

const App = ({ children }) => {
  const SearchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
  const RandomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

  const [Meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [isShowModal, setIsShowModal] = useState(false)
  const [selectedMeal, SetSelectedMeal] = useState(null)
  const [favoriteMeals, setfavoriteMeals] = useState([])

  async function fetchMeals (endPoint) {
    setIsLoading(true)
    const data = await axios(endPoint)
    setMeals(data.data.meals)
    setIsLoading(false)
    return data
  }

  const AddToFav = idMeal => {
    const alreadyFavorite = favoriteMeals.find(m => m.idMeal === idMeal)

    if (alreadyFavorite) return removeFromFav(idMeal)

    const favMeal = Meals.filter(m => m.idMeal === idMeal).at(0)
    const updateFavorite = [...favoriteMeals, favMeal]
    setfavoriteMeals(updateFavorite)
  }

  const removeFromFav = idMeal => {
    const updatedFavMeals = favoriteMeals.filter(meal => meal.idMeal != idMeal)
    setfavoriteMeals(updatedFavMeals)
  }

  const showFavMeal = (Meal) => {
    SetSelectedMeal(Meal);
    setIsShowModal(true);
  }

  async function fetchRandomMeal () {
    fetchMeals(RandomMealUrl)
  }

  const selectMeal = MealID => {
    const sMeal = Meals.filter(Meal => MealID === Meal.idMeal).at(0)
    SetSelectedMeal(sMeal)
    setIsShowModal(true)
  }

  const closeModal = () => {
    SetSelectedMeal(null)
    setIsShowModal(false)
  }

  // starting fucntion
  useEffect(() => {
    setIsLoading(true)
    fetchMeals(SearchUrl)

    const favMeals = JSON.parse(localStorage.getItem('favMeals'))
    // if(favMeals)
    setfavoriteMeals(favMeals)
  }, [])

  useEffect(() => {
    if (!searchTerm) return
    fetchMeals(SearchUrl + searchTerm)
  }, [searchTerm])

  useEffect(() => {
    if (favoriteMeals.length === 0) return
    localStorage.setItem('favMeals', JSON.stringify(favoriteMeals))
  }, [favoriteMeals])

  return (
    <GlobalContext.Provider
      value={{
        Meals,
        isLoading,
        isShowModal,
        selectedMeal,
        favoriteMeals,
        setSearchTerm,
        fetchRandomMeal,
        selectMeal,
        closeModal,
        AddToFav,
        showFavMeal
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default App
