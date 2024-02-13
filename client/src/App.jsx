import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Home} from './pages/Home'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { About } from './pages/About'
import { Profile } from './pages/Profile'
import { Header } from './components/Header'
const App = () => {
  return (
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route to='/' element={<Home/>}/>
      <Route to='/sign-in' element={<SignIn/>}/>
      <Route to='/sign-up' element={<SignUp/>}/>
      <Route to='/about' element={<About/>}/>
      <Route to='/profile' element={<Profile/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App