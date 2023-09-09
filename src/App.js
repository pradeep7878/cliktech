import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Policy from './Components/Policy';
import Error from './Components/Error';
import List from './Components/List';
import Footer from './Components/Footer';

function App() {
  return(
    <>
    <List />
      <Routes>
        <Route exact path='/' element={<Home />}  />
        <Route path='/about' element={<About /> } />
        <Route path='contact' element={<Contact />} />
        <Route path='services' element={<Services />} />
        <Route path='policy' element={<Policy />} />
        <Route path='*' element={<Error />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App;