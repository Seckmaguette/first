import React from 'react';
import Home from './component/Hero/Home';
import Header from './component/Head/Header';
import Features from "./component/Features/Features"
import Portfolio from "./component/Portfolio/Portfolio"
import Resume from './component/Resume/Resume';
import Testimonial from './component/Testimonial/Testimonial';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact/Contact';
import "./App.css";


function App(props) {
  return (
    <div>
      {/* <h1>Hello React</h1> */}
      <Header/>
      <Home/>
      <Features/>
      <Portfolio />
      <Resume/>
      <Blog />
      <Testimonial />
      <Contact/>
    </div>
  );  
}


export default App;
