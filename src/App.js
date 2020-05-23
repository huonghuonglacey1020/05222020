import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio'

import './index.css'


function App (){
  console.log(process.env.PUBLIC_URL)
  return (
    <Router>
      <div>
        <Header  />
        <Route exact path ={process.env.PUBLIC_URL}component ={About} />
        <Route exact path ="/portfolio" component ={Portfolio} />
        <Route exact path ="/contact" component ={Contact} />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
