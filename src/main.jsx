import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider ,createBrowserRouter ,createRoutesFromElements ,Route} from 'react-router-dom'

import App from './App.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import RecipePage from './pages/RecipePage.jsx'

import './index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
     <Route path='/' element={<HomePage />} />
     <Route path='/about' element={<AboutPage />} />
     <Route path='/recipe/:id' element={<RecipePage />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render( 
<RouterProvider router={router} />
)
 