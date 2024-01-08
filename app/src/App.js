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
import Create from './components/create/create'
import Delete from './components/delete/delete'



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
    <Route path="/tour/:id" Component={TourCard}/>
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
  <Routes>
    <Route path="/create" Component={Create}/>
  </Routes>
  <Routes>
    <Route path="/delete" Component={Delete}/>
  </Routes>
  <Footer/>

</BrowserRouter>
}


export default App
