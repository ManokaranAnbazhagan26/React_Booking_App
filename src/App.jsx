import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/common/Header'
import AboutUs from './pages/AboutUs'
import Home from './components/home/Home'
import PageNotFound from './pages/PageNotFound'
import Booking from './pages/Booking'
import RoomPage from './pages/RoomPage'
import ContactPage from './pages/ContactPage'
import TestmonialPage from './pages/TestmonialPage'
import TeamPage from './pages/TeamPage'
import ServicesPage from './pages/ServicesPage'
import Footer from './components/common/Footer'

import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";


function App() {
  
  return (
   <div>

    <div>
      <Router>
       <Header/>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/*' element={<PageNotFound/>} />
           <Route path='/booking' element={<Booking/>} />
           <Route path='/team' element={<TeamPage/>} />
           <Route path='/testimonial' element={<TestmonialPage/>} />
           <Route path='/contact' element={<ContactPage/>} />
           <Route path='/rooms' element={<RoomPage/>} />
           <Route path='/about' element={<AboutUs/>}   />
           <Route path='/services' element={<ServicesPage/>}   />
        </Routes>
        <Footer/>
      </Router>
    </div>
    
   </div>
  )
}

export default App
