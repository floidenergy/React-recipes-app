import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app'

import Meals from './Components/Meals/Meals'
import SearchComp from './Components/SearchBar/SearchBar'
import FavMealBar from './Components/FavMealBar/FavMealBar'
import Modal from './Components/modal/Modal'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App>
            <SearchComp />
            <FavMealBar />
            <Modal />
            <Meals />
        </App>
    </React.StrictMode>
)