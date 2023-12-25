import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Banner from './components/banner/banner'
import Header from './components/header/header'
import Tours from './components/tours/tours'
import TourCard from './components/tour-card/tour-card'
import Recomendation from './components/recomendation/recomendation'
import FQ from './components/fq/fq'
import Reviews from './components/reviews/reviews'
import Auth from './components/auth/auth'
import Footer from './components/footer/footer'


const App = () =>{
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" Component={Banner}/>
  </Routes>
  <Routes>
    <Route path="/tours" Component={Tours}/>
  </Routes>
  <Routes>
    <Route path="/tour" Component={TourCard}/>
  </Routes>
  <Routes>
    <Route path="/recomendation" Component={Recomendation}/>
  </Routes>
  <Routes>
    <Route path="/fq" Component={FQ}/>
  </Routes>
  <Routes>
    <Route path="/reviews" Component={Reviews}/>
  </Routes>
  <Routes>
    <Route path="/accaunt" Component={Auth}/>
  </Routes>
  <Footer/>

</BrowserRouter>
}


export default App
