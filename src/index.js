import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app'

import Meals from './Components/Meals/Meals'
import SearchComp from './Components/SearchBar/SearchBar'
import FavMealBar from './Components/FavMealBar/FavMealBar'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App>
            <SearchComp />
            <FavMealBar />
            <Meals />
        </App>
    </React.StrictMode>
)