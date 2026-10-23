import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import Home from './pages/Home/Home'
import News from './pages/News/News'
import Services from './pages/Services/Services'
import Work from './pages/Work/Work'
import Header from './components/Header/Header'
import HomeAbout from './pages/About/HomeAbout/HomeAbout'
import DetailsAbout from './pages/About/DetailsAbout/DetailsAbout'

function App() {


  return (
    <>
    <Header />
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}>
          <Route index element={<HomeAbout />}></Route>
          <Route path='homeabout' element={<HomeAbout />}></Route>
          <Route path='detailsabout' element={<DetailsAbout />}/>
          </Route >
        <Route path="/services" element={<Services />}/>
        <Route path="/work" element={<Work />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/contacts" element={<Contacts />}/>
     </Routes>
    </>
  )
}

export default App
