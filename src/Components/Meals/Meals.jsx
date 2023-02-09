import React, {useContext} from 'react'

import {GlobalContext} from '../../context'
import MealCard from './MealCard';

import {AiOutlineLike} from 'react-icons/ai'

const Meals = () =>{
    const {Meals, isLoading} = useContext(GlobalContext);

    // console.log(data);
    return (
        <section className="meals" style={{
            // width: '80%',
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            gap: '15px',
            margin: '10px'

        }}>
            {isLoading ? console.log('loading')
                : (!Meals ? <p>no meals</p>
                    : Meals.map(m => {
                        return <MealCard key={m.idMeal} meal={m}/>
                    }))
            }
        </section>
    )
}

export default Meals;