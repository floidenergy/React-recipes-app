import React, {useContext} from 'react'

import {GlobalContext} from '../../context'
import MealCard from './MealCard';

import {AiOutlineLike} from 'react-icons/ai'

const NoMeals = () => {
    return <div className="noMeals"
        style={{
            fontSize: '3rem',
            fontWeight: '600',
            width: '100vw',
            height: '100vh',
            textAlign: "center",
            boxSizing: 'border-box',
            paddingTop: "calc(100vh/2)"
        }}
    >
        <p style={{transform: "translateY(-100%)", color: "#C6C6C6"}}>No Meals Found</p>
    </div>
}

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
            {/* {isLoading ? <NoMeals />
                : (!Meals ? <p>no meals</p>
                    : Meals.map(m =>  <MealCard key={m.idMeal} meal={m}/>)
                )
            } */}

            {!Meals ? <NoMeals /> : 
            Meals.map(m => <MealCard key={m.idMeal} meal={m} />)}
        </section>
    )
}

export default Meals;