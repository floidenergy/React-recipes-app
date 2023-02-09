import React from 'react';
import {AiOutlineLike} from 'react-icons/ai'

import './MealsCard.css'
const MealCard = ({meal}) => {
    const {idMeal, strArea : Area, strMeal : Name, strMealThumb: Thumb} = meal;
    return (
        <div key={idMeal} className='MealCard'>
            <div className="header">
                <img src={Thumb} className="MealThumb"/>
                <p className="area">{Area}</p>
            </div>
            <div className="footer">
                <p className="name">{Name}</p>
                <button className="likeButton"> <AiOutlineLike /> </button>
            </div>
        </div>
    );
}

export default MealCard;
