import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Blog } from './pages/blogfolder/blog';
import { Contact } from './pages/contactfolder/contact';
import { Portfolio } from './pages/portfoliofolder/portfolio';
import { Projects } from './pages/projectsfolder/projects';
import { Home } from './pages/homefolder/home';
import { Lithum } from './pages/lithum/lithum';
import { Frosci } from './pages/frosci/frosci';
import { Notfound } from './pages/notfoundfolder/notfound';
import { Footer } from './containers';
import { Pedestrian } from './pages/projectsfolder/project_details/pedestrian'
import { YHacks } from './pages/projectsfolder/project_details/yhacks'
import { Pokemon } from './pages/blogfolder/blogs/pokemon'
import Navbar from './components/navbar/Navbar';

const RouteWrapper = () => {
  const location = useLocation(); 
  const showHeaderFooter = location.pathname !== '/lithum' && location.pathname !== '/frosci'; // Determine if header and footer are showed 

  return (
    <>
      {showHeaderFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lithum" element={<Lithum />} />
        <Route path="/frosci" element={<Frosci />} />
        <Route path="/pedestrian" element={<Pedestrian />} />
        <Route path="/yhacks" element={<YHacks />}/>
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <RouteWrapper />
    </Router>
  );
};

export default App;
