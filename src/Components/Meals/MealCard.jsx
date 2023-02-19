import React, {useContext} from 'react';
import {AiOutlineLike, AiFillLike} from 'react-icons/ai'

import { GlobalContext } from '../../context';

import './MealsCard.css'
const MealCard = ({meal}) => {
    const {selectMeal, closeModal, AddToFav, favoriteMeals} = useContext(GlobalContext);
    const {idMeal, strArea : Area, strMeal : Name, strMealThumb: Thumb} = meal;
    return (
        <div key={idMeal}  className='MealCard'>
            <div onClick={() => selectMeal(idMeal)} className="header">
                <img src={Thumb} className="MealThumb"/>
                <p className="area">{Area}</p>
            </div>
            <div className="footer">
                <p className="name">{Name}</p>
                <button className="likeButton" onClick={() => AddToFav(idMeal)}>{favoriteMeals.find(m => m.idMeal === idMeal)? <AiFillLike /> : <AiOutlineLike />}</button>
            </div>
        </div>
    );
}

export default MealCard;
