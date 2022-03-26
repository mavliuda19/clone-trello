import React, { Suspense } from 'react'
import {Routes, Route, Navigate}from 'react-router-dom'
import LoadingSpinner from './components/Ui/LoadingSpinner'
import LoginPage from './pages/Loginpage'
import NotFound from './pages/NotFound'

const RegisterPage = React.lazy(()=> import('./pages/RegisterPage'))
const HomePage = React.lazy(()=>import('./pages/HomePage'))
const App = () => {
  return (
    <>
    <Suspense fallback={<LoadingSpinner/>}>
        <Routes>
      <Route exact path='/' element={<Navigate replace to='/login'/>}/>
      <Route exact path='/home' element={<HomePage/>}/>
      <Route exact path='/login' element={<LoginPage/>}/>
      <Route exact path='/register' element={<RegisterPage/>}/>
      <Route exact path='*' element={<NotFound/>}/>
    </Routes>
    </Suspense>
    </>
    
  )
}

export default App