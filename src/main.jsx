import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import RegistrationPage from './pages/RegistrationPage.jsx';
import SuccessPage from './pages/SuccessPage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<StrictMode><App /></StrictMode>}>
      <Route index element={<HomePage />} />
      <Route path='/:id' element={<HomePage />} />
      <Route path='/register' element={<RegistrationPage />} />
      <Route path='/registrationSuccess' element={<SuccessPage />} />
      <Route path='/privacyPolicy' element={<PrivacyPolicy />} />

    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
