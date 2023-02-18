import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'

import App from './app'
import { GlobalContext } from './context'

import Meals from './Components/Meals/Meals'
import SearchComp from './Components/SearchBar/SearchBar'
import FavMealBar from './Components/FavMealBar/FavMealBar'
import Modal from './Components/modal/Modal'

const Renderer = () => {
    
    const {isShowModal} = useContext(GlobalContext)

    return (
        <>
            <SearchComp />
            <FavMealBar />
            {isShowModal && <Modal />}
            <Meals />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App>
            <Renderer />
        </App>
    </React.StrictMode>
)
