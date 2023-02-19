import React, {useContext} from "react";

import { GlobalContext } from "../../context";

import './favMealBar.css'

const FavMealBar = () => {

    const {favoriteMeals, showFavMeal} = useContext(GlobalContext);
    // TODO: THERE IS AN ERROR WHEN CLICKING ON A FAVE MEAL THAT AINT IN THE MEALS VARIABLE STATE
    return (
        <div className="favMealBar">
            {favoriteMeals.map(meal => <img key={meal.idMeal} src={meal.strMealThumb} onClick={() => showFavMeal(meal)} alt="" className="MealIcon"/>)}
        </div>
    )
}

export default FavMealBar;