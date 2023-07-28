import './App.scss'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


//pages
import AboutPage from './components/AboutPage/AboutPage'
import Skills from './components/Skills/Skills'
import MyProjects from './components/MyProjects/MyProjects'

//pages parts
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ErrorPage from './components/ErrorPage/ErrorPage';


// <Main/><Header/><Footer/>

const App = () => {

  return (
    <>
      <Router>
      <Header></Header>
      <Footer></Footer>
        <Routes>
          <Route path='/' element={<AboutPage/>}/>
          <Route path='/wcid' element={<Skills/>}/>
          <Route path='/projects' element={<MyProjects/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
