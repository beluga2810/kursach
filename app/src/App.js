import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Banner from './components/banner/banner'
import Header from './components/header/header'
import Tours from './components/tours/tours'


const App = () =>{
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" Component={Banner}/>
  </Routes>
  <Routes>
    <Route path="/tours" Component={Tours}/>
  </Routes>

</BrowserRouter>
}


export default App
