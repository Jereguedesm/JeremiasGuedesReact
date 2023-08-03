import './App.scss'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css"

//pages

import AboutPage from './components/Pages/AboutPage/AboutPage'
import Skills from './components/Pages/Skills/Skills'
import MyProjects from './components/Pages/MyProjects/MyProjects'
import ContactPage from './components/Pages/ContactPage/ContactPage';
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage"

//pages parts
import Header from "./components/Structure/Header/Header"
import Footer from "./components/Structure/Footer/Footer"


const App = () => {

  return (
    <>
      <Router>
      <Header></Header>
      
        <Routes>
          <Route path='/' element={<AboutPage/>}/>
          <Route path='/wcid' element={<Skills/>}/>
          <Route path='/projects' element={<MyProjects/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
          
        </Routes>

        <Footer></Footer>
      </Router>
    </>
  )
}

export default App
