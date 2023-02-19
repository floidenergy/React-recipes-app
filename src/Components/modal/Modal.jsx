import React, { useContext } from 'react'
import {ImCross} from 'react-icons/im'

import { GlobalContext } from '../../context'

import './Modal.css'

const Modal = () => {
    const {
        selectedMeal: {
            strMeal: name,
            strMealThumb: image,
            strTags: tag,
            strInstructions: Instructions,
            strYoutube: youtube,
            strSource: Source,
            strArea: Area
        },
        selectedMeal,
        closeModal
    } = useContext(GlobalContext)

    const Ingredients = []

    for (let index = 1; true; index++) {
        const Ingredient = selectedMeal[`strIngredient${index}`]
        if (Ingredient === '') break
        const Measure = selectedMeal[`strMeasure${index}`]
        // console.log(`${index}: ${Measure} of ${Ingredient}`)
        Ingredients.push({ index, Ingredient, Measure })
    }

    // const youtube = 'https://www.youtube.com/watch?v=VVnZd8A84z4';

    const youtubeVideoID = youtube.slice(youtube.indexOf('v=')+2, youtube.length);

    const youtubeIframeURL = `https://www.youtube.com/embed/${youtubeVideoID}?autoplay=0`
    return (
        <aside className='Modal'>
            <button className='close-btn' onClick={closeModal}><ImCross /></button>
            <article className='modal-article'>
                <header>
                    <img src={image} alt={`${name}'s picture`} />
                </header>
                <footer>
                    <p className='name'>{name}</p>
                    <p className="tag">{tag} | {Area}</p>
                    <div className='tutorial'>
                        <div className='ingredients-section'>
                            <p className='title'>ingredients</p>
                            <ul>
                                {Ingredients.map(i => <ul key={i.index}>{`${i.Measure} of ${i.Ingredient}`}</ul>)}
                            </ul>
                        </div>
                        <div className='instructions-section'>
                            <p className='title'>instructions</p>
                            <p className='instructions'>{Instructions}</p>
                        </div>
                    </div>
                    <iframe src={youtubeIframeURL} height={360} ></iframe>
                    <p className='cuteMessage'>Dont forget to Cook it with love ♥</p>
                </footer>
            </article>
        </aside>
    )
}

export default Modal

// {
//   dateModified: null
//   idMeal: '52977'
//   strArea: 'Turkish'
//   strCategory: 'Side'
//   strCreativeCommonsConfirmed: null
//   strDrinkAlternate: null
//   strImageSource: null
//   strIngredient1: 'Lentils'
//   strIngredient2: 'Onion'
//   strIngredient3: 'Carrots'
//   strIngredient4: 'Tomato Puree'
//   strIngredient5: 'Cumin'
//   strIngredient6: 'Paprika'
//   strIngredient7: 'Mint'
//   strIngredient8: 'Thyme'
//   strIngredient9: 'Black Pepper'
//   strIngredient10: 'Red Pepper Flakes'
//   strIngredient11: 'Vegetable Stock'
//   strIngredient12: 'Water'
//   strIngredient13: 'Sea Salt'
//   strIngredient14: ''
//   strIngredient15: ''
//   strIngredient16: ''
//   strIngredient17: ''
//   strIngredient18: ''
//   strIngredient19: ''
//   strIngredient20: ''
//   strInstructions: 'Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later\r\nIn a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.\r\nAdd the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.\r\nImmediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.\r\nAfter it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.\r\nAfter the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.\r\nServe with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week.'
//   strMeal: 'Corba'
//   strMealThumb: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg'
//   strMeasure1: '1 cup '
//   strMeasure2: '1 large'
//   strMeasure3: '1 large'
//   strMeasure4: '1 tbs'
//   strMeasure5: '2 tsp'
//   strMeasure6: '1 tsp '
//   strMeasure7: '1/2 tsp'
//   strMeasure8: '1/2 tsp'
//   strMeasure9: '1/4 tsp'
//   strMeasure10: '1/4 tsp'
//   strMeasure11: '4 cups '
//   strMeasure12: '1 cup '
//   strMeasure13: 'Pinch'
//   strMeasure14: ' '
//   strMeasure15: ' '
//   strMeasure16: ' '
//   strMeasure17: ' '
//   strMeasure18: ' '
//   strMeasure19: ' '
//   strMeasure20: ' '
//   strSource: 'https://findingtimeforcooking.com/main-dishes/red-lentil-soup-corba/'
//   strTags: 'Soup'
//   strYoutube: 'https://www.youtube.com/watch?v=VVnZd8A84z4'
// }
