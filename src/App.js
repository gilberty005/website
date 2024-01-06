import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {Blog} from './pages/blogfolder/blog';
import {Contact} from './pages/contactfolder/contact';
import {Portfolio} from './pages/portfoliofolder/portfolio';
import {Projects} from './pages/projectsfolder/projects';
import {Home} from './pages/homefolder/home';
import {Notfound} from './pages/notfoundfolder/notfound'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </Router>
  );
}

export default App;